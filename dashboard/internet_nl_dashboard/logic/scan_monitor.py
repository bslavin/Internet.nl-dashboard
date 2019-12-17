from datetime import timedelta
from typing import List

from django.utils import timezone

from dashboard.internet_nl_dashboard.models import Account, AccountInternetNLScan, UrlListReport, \
    AccountInternetNLScanLog


def get_running_scans(account: Account) -> List:

    scans = AccountInternetNLScan.objects.all().filter(
        account=account,
        urllist__is_deleted=False
    ).order_by('-pk')[0:30].select_related(
        'urllist', 'account', 'scan',
    )

    response = []
    for scan in scans:
        # nested query, should be optimized, prefetch doesn't work here as it's one line down... for 30 queries
        # it's probably fine but far from ideal.

        last_report_id = None
        # Finished means also report created, mail sent, etc.
        if scan.state == "finished":
            # first report within the next day

            last_report = UrlListReport.objects.all().filter(
                urllist=scan.urllist,
                at_when__lte=scan.scan.finished_on + timedelta(hours=24),
                at_when__gte=scan.scan.finished_on
            ).order_by('-id').only('id').first()

            if last_report:
                last_report_id = last_report.id

        if scan.state == "finished":
            runtime = scan.scan.finished_on - scan.scan.started_on
        else:
            runtime = timezone.now() - scan.scan.started_on

        # get complete log from this scan.
        logs = AccountInternetNLScanLog.objects.all().filter(scan=scan).order_by('-at_when')
        log_messages = []
        for log in logs:
            log_messages.append({'at_when': log.at_when, 'state': log.state})

        runtime = runtime.total_seconds() * 1000

        response.append({
            'id': scan.id,
            # mask that there is a mail_dashboard variant.
            'type': "web" if scan.scan.type == "web" else "mail",
            'started': scan.scan.started,
            'started_on': scan.scan.started_on,
            'finished': scan.scan.finished,
            'finished_on': scan.scan.finished_on,
            'status_url': scan.scan.status_url,
            'message': scan.scan.friendly_message,
            'success': scan.scan.success,
            'list': scan.urllist.name,
            'list_id': scan.urllist.id,
            'last_check': scan.scan.last_check,
            'runtime': runtime,
            'last_report_id': last_report_id,
            'state': scan.state,
            'log': log_messages
        })

    return response
