import json
from typing import List

from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from websecmap.app.common import JSEncoder

from dashboard.internet_nl_dashboard.logic.domains import (alter_url_in_urllist, create_list,
                                                           delete_list, get_urllist_content,
                                                           get_urllists_from_account,
                                                           save_urllist_content,
                                                           save_urllist_content_by_name, scan_now,
                                                           update_list_settings)
from dashboard.internet_nl_dashboard.views import (LOGIN_URL, get_account,
                                                   inject_default_language_cookie)


@login_required(login_url=LOGIN_URL)
def index(request) -> HttpResponse:

    response = render(request, 'internet_nl_dashboard/templates/internet_nl_dashboard/domains.html', {
        'menu_item_addressmanager': "current",
        'debug': settings.DEBUG
    })

    return inject_default_language_cookie(request, response)


@login_required(login_url=LOGIN_URL)
def get_lists(request) -> JsonResponse:
    account = get_account(request)

    response = get_urllists_from_account(account=account)

    return JsonResponse(response, encoder=JSEncoder, safe=False)


@login_required(login_url=LOGIN_URL)
def get_urllist_content_(request, urllist_id: int) -> JsonResponse:
    return JsonResponse(get_urllist_content(account=get_account(request), urllist_id=urllist_id), encoder=JSEncoder)


@login_required(login_url=LOGIN_URL)
def save_list_content(request, urllist_name: str, urls: List[str]) -> JsonResponse:
    return JsonResponse(save_urllist_content_by_name(get_account(request), urllist_name, urls), encoder=JSEncoder)


@login_required(login_url=LOGIN_URL)
def update_list_settings_(request):
    return JsonResponse(update_list_settings(get_account(request), get_json_body(request)))


@login_required(login_url=LOGIN_URL)
def create_list_(request):
    return JsonResponse(create_list(get_account(request), get_json_body(request)))


@login_required(login_url=LOGIN_URL)
def delete_list_(request):
    return JsonResponse(delete_list(get_account(request), get_json_body(request)))


@login_required(login_url=LOGIN_URL)
def alter_url_in_urllist_(request):
    return JsonResponse(alter_url_in_urllist(get_account(request), get_json_body(request)))


@login_required(login_url=LOGIN_URL)
def add_urls_to_urllist(request):
    return JsonResponse(save_urllist_content(get_account(request), get_json_body(request)))


@login_required(login_url=LOGIN_URL)
def scan_now_(request):
    return JsonResponse(scan_now(get_account(request), get_json_body(request)))


def get_json_body(request):

    try:
        user_input = json.loads(request.body)
    except json.JSONDecodeError:
        user_input = {}

    return user_input
