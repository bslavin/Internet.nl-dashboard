from django.urls import path, register_converter

from dashboard.internet_nl_dashboard.views import (__init__, domains, download_spreadsheet,
                                                   powertools, report, scan_monitor, spreadsheet)


class SpreadsheetFileTypeConverter:
    # Supports {"key": "value", "key2": "value2"} syntax.
    regex = '(xlsx|ods|csv)'

    def to_python(self, value):
        return str(value)

    def to_url(self, value):
        return '%s' % value


register_converter(SpreadsheetFileTypeConverter, 'spreadsheet_filetype')


urlpatterns = [
    path('', report.dashboard),
    path('powertools/', powertools.powertools),
    path('logout/', __init__.logout_view),

    # domain management
    path('domains/', domains.index),
    path('data/urllists/get/', domains.get_lists),
    path('data/urllist_content/get/<int:urllist_id>/', domains.get_urllist_content_),
    path('data/urllist/save_list_content/', domains.save_list_content),
    path('data/urllist/update_list_settings/', domains.update_list_settings_),
    path('data/urllist/create_list/', domains.create_list_),
    path('data/urllist/delete/', domains.delete_list_),
    path('data/urllist/url/save/', domains.alter_url_in_urllist_),
    path('data/urllist/url/add/', domains.add_urls_to_urllist),

    # uploads of domains
    path('upload/', spreadsheet.upload),
    path('data/upload-spreadsheet/', spreadsheet.upload_spreadsheet),
    path('data/upload-history/', spreadsheet.upload_history),

    # scans / scan monitor
    path('scans/', scan_monitor.scan_monitor),
    path('data/scan-monitor/', scan_monitor.running_scans),

    # reporting
    path('reports/', report.dashboard),
    path('data/report/get/<int:report_id>/', report.get_report_),
    path('data/report/recent/', report.get_recent_reports_),
    path('data/download-spreadsheet/<int:report_id>/<spreadsheet_filetype:file_type>/',
         download_spreadsheet.download_spreadsheet)

    # Would you enable the below login form, you will bypass all second factor authentication. Therefore do not enable
    # this url (!)
    # url(r'^login/$', auth_views.LoginView.as_view(template_name='internet_nl_dashboard/registration/login.html'),
    # name='login'),
]
