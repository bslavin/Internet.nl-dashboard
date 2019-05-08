import logging

from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from websecmap.app.common import JSEncoder

from dashboard.internet_nl_dashboard.logic.spreadsheet import complete_import, get_upload_history
from dashboard.internet_nl_dashboard.views.__init__ import (LOGIN_URL, get_account,
                                                            get_dashboarduser,
                                                            inject_default_language_cookie)

log = logging.getLogger(__package__)


@login_required(login_url=LOGIN_URL)
def upload(request) -> HttpResponse:

    response = render(request, 'internet_nl_dashboard/templates/internet_nl_dashboard/upload.html', {
        'menu_item_addressmanager': "current",
        'debug': settings.DEBUG
    })

    return inject_default_language_cookie(request, response)


@login_required(login_url=LOGIN_URL)
def upload_spreadsheet(request) -> HttpResponse:
    # Instead of some json message, give a full page, so the classic uploader also functions pretty well.
    # todo: Or should this be a redirect, so the 'reload' page does not try to resend the form...
    response = upload(request)
    response.status_code = 400

    # happens when no file is sent
    if 'file' not in request.FILES:
        return response

    if request.method == 'POST' and request.FILES['file']:
        file = save_file(request.FILES['file'])
        status = complete_import(user=get_dashboarduser(request), file=file)

        if status['error']:
            # The GUI wants the error to contain some text: As that text is sensitive to xss(?) (probably only
            # if you see the output directly, not via javascript or json).
            status['error'] = status['message']
            return response

        response.status_code = 200
        return response

    return response


def save_file(myfile) -> str:
    # todo: filesystem might be full.
    # https://docs.djangoproject.com/en/2.1/ref/files/storage/
    fs = FileSystemStorage(location=settings.MEDIA_ROOT)
    filename = fs.save(myfile.name, myfile)
    file = settings.MEDIA_ROOT + '/' + filename
    return file


@login_required(login_url=LOGIN_URL)
def upload_history(request) -> JsonResponse:
    account = get_account(request)

    # list of dicts: In order to allow non-dict objects to be serialized set the safe parameter to False.
    return JsonResponse(get_upload_history(account), encoder=JSEncoder, safe=False)
