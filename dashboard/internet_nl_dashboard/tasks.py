from modulefinder import Module
from typing import List

from celery import group
from websecmap.celery import Task, app

from dashboard.internet_nl_dashboard.models import UrlList
from dashboard.internet_nl_dashboard.scanners import scan_internet_nl_per_account
from dashboard.internet_nl_dashboard.scanners.scan_internet_nl_per_account import \
    create_dashboard_scan_tasks

# explicitly declare the imported modules as this modules 'content', prevents pyflakes issues
__all__: List[Module] = [scan_internet_nl_per_account]


@app.task(queue='storage')
def start_scans_for_lists_who_are_up_for_scanning() -> Task:
    """
    This can be run every minute, only the ones that are up for scanning will be scanned. It will update all
    urllists (even delted and not eligeble for scanning) so that a next scan is happening on the right time.
    """

    tasks = []

    for urllist in UrlList.objects.all().filter():
        # this also gets the lists that are not scanned. The scan date needs to progress, otherwise it will be
        # scanned instantly when the list will be enabled. This also goes for deleted lists.
        if urllist.enable_scans is False or urllist.is_deleted is True:
            urllist.renew_scan_moment()
            continue

        if urllist.is_due_for_scanning():
            tasks.append(create_dashboard_scan_tasks(urllist))

        # placed here, as otherwise the list is never due for scanning as the date might be updated to something
        # new in the future.
        urllist.renew_scan_moment()

    # using this in create_function_job so a job is created, allowing for tracking this a bit
    return group(tasks)
