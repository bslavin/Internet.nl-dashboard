import logging
from copy import deepcopy
from datetime import datetime, timedelta
from typing import List, Set

import pytz
from celery import group
from deepdiff import DeepDiff
from websecmap.celery import Task, app
from websecmap.organizations.models import Url
from websecmap.reporting.report import (aggegrate_url_rating_scores, get_latest_urlratings_fast,
                                        relevant_urls_at_timepoint)

from dashboard.internet_nl_dashboard.models import UrlList, UrlListReport

log = logging.getLogger(__package__)


urllist_report_content = {

    'mail': [
        'internet_nl_mail_starttls_tls_available',
        'internet_nl_mail_auth_spf_exist',
        'internet_nl_mail_auth_dkim_exist',
        'internet_nl_mail_auth_dmarc_exist',

        # dashboard fields:
        'internet_nl_mail_ipv6_mx_reach',
        'internet_nl_mail_ipv6_ns_reach',
        'internet_nl_mail_ipv6_ns_address',
        'internet_nl_mail_ipv6_mx_address',
        'internet_nl_mail_dnssec_mx_exist',
        'internet_nl_mail_dnssec_mx_valid',
        'internet_nl_mail_dnssec_mailto_valid',
        'internet_nl_mail_dnssec_mailto_exist',
        'internet_nl_mail_auth_spf_policy',
        'internet_nl_mail_auth_dmarc_policy',
        'internet_nl_mail_starttls_tls_keyexchange',
        'internet_nl_mail_starttls_tls_compress',
        'internet_nl_mail_starttls_cert_sig',
        'internet_nl_mail_starttls_cert_pubkey',
        'internet_nl_mail_starttls_dane_rollover',
        'internet_nl_mail_starttls_tls_secreneg',
        'internet_nl_mail_starttls_dane_exist',
        'internet_nl_mail_starttls_dane_valid',
        'internet_nl_mail_starttls_tls_ciphers',
        'internet_nl_mail_starttls_tls_clientreneg',
        'internet_nl_mail_starttls_cert_chain',
        'internet_nl_mail_starttls_tls_version',
        'internet_nl_mail_starttls_cert_domain',
        'internet_nl_mail_dashboard_tls',
        'internet_nl_mail_dashboard_auth',
        'internet_nl_mail_dashboard_dnssec',
        'internet_nl_mail_dashboard_ipv6',
        'internet_nl_mail_dashboard_overall_score',

        # Legacy fields used in dashboard:
        'internet_nl_mail_legacy_dane',
        'internet_nl_mail_legacy_tls_available',
        'internet_nl_mail_legacy_spf',
        'internet_nl_mail_legacy_dkim',
        'internet_nl_mail_legacy_dmarc',
        'internet_nl_mail_legacy_dnsssec_mailserver_domain',
        'internet_nl_mail_legacy_dnssec_email_domain',
        'internet_nl_mail_legacy_ipv6_mailserver',
        'internet_nl_mail_legacy_ipv6_nameserver',
    ],

    'web': [
        'internet_nl_web_ipv6_ws_similar',

        # used in dashboard
        'internet_nl_web_ipv6_ws_address',
        'internet_nl_web_ipv6_ns_reach',
        'internet_nl_web_ipv6_ws_reach',
        'internet_nl_web_ipv6_ns_address',
        'internet_nl_web_dnssec_valid',
        'internet_nl_web_dnssec_exist',
        'internet_nl_web_https_tls_keyexchange',
        'internet_nl_web_https_tls_compress',
        'internet_nl_web_https_cert_sig',
        'internet_nl_web_https_cert_pubkey',
        'internet_nl_web_https_dane_valid',
        'internet_nl_web_https_tls_secreneg',
        'internet_nl_web_https_http_hsts',
        'internet_nl_web_https_http_compress',
        'internet_nl_web_https_dane_exist',
        'internet_nl_web_https_http_available',
        'internet_nl_web_https_tls_ciphers',
        'internet_nl_web_https_tls_clientreneg',
        'internet_nl_web_https_tls_version',
        'internet_nl_web_https_cert_chain',
        'internet_nl_web_https_http_redirect',
        'internet_nl_web_https_cert_domain',
        'internet_nl_web_tls',
        'internet_nl_web_dnssec',
        'internet_nl_web_ipv6',
        'internet_nl_web_overall_score',

        # Legacy fields, used in dashboard:
        'internet_nl_web_legacy_dane',
        'internet_nl_web_legacy_tls_ncsc_web',
        'internet_nl_web_legacy_hsts',
        'internet_nl_web_legacy_https_enforced',
        'internet_nl_web_legacy_tls_available',
        'internet_nl_web_legacy_ipv6_webserver',
        'internet_nl_web_legacy_ipv6_nameserver'
    ]
}


def compose_task(**kwargs) -> Task:
    """
    During scanning, both web and mail scans are triggered for everything. Suppose we change that, and make it possible
    to only perform mail or web scans, we still have a problem. The advantage is that fewer scans run, which saves
    everybody a lot of time. The disadvantage is, that when (for example) 'web' scans are disabled, old endpoints and
    such will still be added to the report. This means old data is on the report.
    At the same time, several lists can contain the url, and it might be totally fine to have those multiple endpoints.
    So, we have to figure out a way to tell the reporting engine what kinds of vulnerabilities are used (instead of
    all).
    What 'is_allowed_to_report', is currently defined in settings. We're not going to change those settings per report,
    as that would defeat the settings cache mechanism and because it's silly. We want to be able to influence that
    method in another way. For example: first let that play out, and then tell what we want to have. This way the
    settings still have precedence. The same url rating might also be used for different reports.
    The only option is to filter on aggregation for the specific report for a list. Therefore
    'aggegrate_url_rating_scores' (sic) contains a 'issue filter' option. The report that will be built is located in
    the urllist settings.

    :param kwargs:
    :return:
    """
    urllists = UrlList.objects.filter(is_deleted=False)
    tasks = [rate_urllists_now.si([urllist]) for urllist in urllists]
    return group(tasks)


@app.task(queue='storage')
def rate_urllists_now(urllists: List[UrlList]):
    for urllist in urllists:
        now = datetime.now(pytz.utc)
        rate_urllist_on_moment(urllist, now)


@app.task(queue='storage')
def rate_urllists_historically(urllists: List[UrlList]):
    # weekly, and for the last 14 days daily. 64 calculations
    # maybe this is not precise enough...
    weeks: List[datetime] = [datetime.now(pytz.utc) - timedelta(days=t) for t in range(365, 0, -7)]
    weeks += [datetime.now(pytz.utc) - timedelta(days=t) for t in range(14, 0, -1)]
    dates: Set[datetime] = set(weeks)

    today = datetime.now(pytz.utc).date()

    # round off days to the latest possible moment on that day, except for the last day, so to not overwrite.
    # note that if this is run every day, you'll still get reports for all days where things change (more inefficiently)
    dates = set([x.replace(hour=23, minute=59, second=59, microsecond=9999999) for x in dates if x.date() is not today])

    for urllist in urllists:
        for date in dates:
            rate_urllist_on_moment(urllist, date)


def rate_urllist_on_moment(urllist: UrlList, when: datetime = None):
    # If there is no time slicing, then it's today.
    if not when:
        when = datetime.now(pytz.utc)

    log.info("Creating report for urllist %s on %s" % (urllist, when, ))

    if UrlListReport.objects.all().filter(urllist=urllist, at_when=when).exists():
        log.debug("UrllistReport already exists for %s on %s. Not overwriting." % (urllist, when))
        return

    urls = relevant_urls_at_timepoint_urllist(urllist=urllist, when=when)
    all_url_ratings = get_latest_urlratings_fast(urls, when)
    calculation = aggegrate_url_rating_scores(all_url_ratings, only_include_issues=urllist_report_content[urllist.scan_type])

    try:
        last = UrlListReport.objects.filter(urllist=urllist, at_when__lte=when).latest('at_when')
    except UrlListReport.DoesNotExist:
        last = UrlListReport()  # create a dummy one for comparison

    calculation['name'] = urllist.name

    if not DeepDiff(last.calculation, calculation, ignore_order=True, report_repetition=True):
        log.warning("The report for %s on %s is the same as the report from %s. Not saving." % (
            urllist, when, last.at_when))
        return

    log.info("The calculation for %s on %s has changed, so we're saving this rating." % (urllist, when))

    # remove urls and name from scores object, so it can be used as initialization parameters (saves lines)
    # this is by reference, meaning that the calculation will be affected if we don't work on a clone.
    init_scores = deepcopy(calculation)
    del(init_scores['name'])
    del(init_scores['urls'])

    report = UrlListReport(**init_scores)
    report.urllist = urllist
    report.at_when = when
    report.calculation = calculation
    report.save()


def relevant_urls_at_timepoint_urllist(urllist: UrlList, when: datetime):
    queryset = Url.objects.filter(urls_in_dashboard_list=urllist)

    return relevant_urls_at_timepoint(queryset=queryset, when=when)
