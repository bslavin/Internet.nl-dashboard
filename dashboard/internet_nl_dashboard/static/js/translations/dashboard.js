const messages = {
    en: {
        charts: {
            report_bar_chart: {
                title: 'Average adoption of standards, %{list_information}, %{number_of_domains} domains.',
                yAxis_label: 'Adoption',
            },
            report_radar_chart: {
                title: 'Average adoption of standards, %{list_information}, %{number_of_domains} domains.',
            },
            percentage_timeline: {
                title: 'Average adoption of standards. Overall.',
                yAxis_label: 'Adoption',
            }
        },

        domains: {
            add_new_list: 'Add new list',
            button_close_label: 'Close',
            button_create_list_label: 'Create List',
        },
        domain_management: {

            button_labels: {
                configure: 'Configure',
                add_domains: 'Add domains',
                scan_now: 'Scan now',
                scan_now_scanning: 'Scanning',
                scan_now_scanning_title: 'The scan now option is available only once a day, when no scan is running.',
                delete: 'Delete',
                view_csv: 'View .csv',
                timeout_for_24_hours: 'Max 1 scan/day',
                scanning_disabled: 'Scanning disabled',
            },

            about_this_list: {
                header: 'About this list',
                last_scan_started: 'Last scan started',
                still_running: 'still running',
                finished: 'finished',
                not_scanned_before: 'Not scanned before',
                type_of_scan_performed: 'Type of scan performed',
                scan_frequency: 'Scan frequency',
                next_scheduled_scan: 'Next scheduled scan',
                scanning_disabled: 'Scanning of this list is disabled.',
                latest_report: 'Latest report',
                open: 'open',
            },

            domains: {
                header: 'Domains',
                eligeble_mail: 'Is eligeble for e-mail scans',
                unknown_eligeble_mail: 'Not yet known if scanable for mail',
                not_eligeble_mail: 'Is not eligeble for e-mail scans. Will be checked again when starting a scan.',
                eligeble_web: 'Is eligeble for web scans',
                unknown_eligeble_web: 'Not yet known if scannable for web',
                not_eligeble_web: 'Is not eligeble for web scans. Will be checked again when starting a scan.',

                button_labels: {
                    save: 'Save',
                    cancel: 'Cancel',
                    remove: 'Remove',
                }
            },

            edit_form: {
                title: 'Edit list settings',
                cancel: 'Cancel',
                ok: 'Update'
            },

            delete_form: {
                title: 'Delete list',
                message: 'Are you sure you want to\n' +
                    '                delete this list? Deleting this list cannot be undone.',
                cancel: 'No, take me back',
                ok: 'Yes, Delete'
            },

            scan_now_form: {
                title: 'Confirm to scan now',
                message: 'To start a scan now, please take the following in consideration: <br>' +
                    'A scan can only be started once a day, and only when no scan is already running. Note that a scan cannot be cancelled.',
                cancel: 'Cancel',
                ok: 'Scan now'
            },

            bulk_add_form: {
                title: 'Bulk add domains',
                message: 'You can add many domains in one go. To do this, seperate each domain with a comma.',
                ok: 'Add the above domains to the list',
                status: 'Status',
                nothing_added: 'nothing added yet.',
                added_n_to_list: 'Added {0} domains to this list.',
                ignored_n: 'Additionally, {0} domains have been\n' +
                    '                            ignored as they are already in this list.',
                warning: 'Warning!',
                warning_message: 'Some domains where not added because they are in an incorrect format. <br>\n' +
                    '                            The following domains where not added',
            }

        },
        // field name translation
        urllist: {
            field_label_id: 'id',
            field_label_name: 'List Name',
            field_label_enable_scans: 'Enable Scans',
            enable_scans_enabled: 'Enabled',
            enable_scans_disabled: 'Disabled',
            field_label_scan_type: 'What scan to run',
            scan_type_web: 'web',
            scan_type_mail: 'mail',
            field_label_automated_scan_frequency: 'How often should the scan run?',
            automated_scan_frequency_disabled: 'Disabled',
            automated_scan_frequency_every_half_year: 'Every half year',
            automated_scan_frequency_every_quarter: 'At the start of every quarter',
            automated_scan_frequency_every_month: 'Every 1st day of the month',
            automated_scan_frequency_twice_per_month: 'Twice per month',
        },
        report: {
            mail: 'E-Mail',
            web: 'Web',

            // legacy values
            mail_legacy: 'Forum Standardisation (NL) Legacy Mail Metrics',
            web_legacy: 'Forum Standardisation (NL) Legacy Web Metrics',

            internet_nl_mail_legacy_dane: 'Dane (legacy)',
            internet_nl_mail_legacy_tls_available: 'TLS Available (legacy)',
            internet_nl_mail_legacy_spf: 'SPF (legacy)',
            internet_nl_mail_legacy_dkim: 'DKIM (legacy)',
            internet_nl_mail_legacy_dmarc: 'DMARC (legacy)',
            internet_nl_mail_legacy_dnsssec_mailserver_domain: 'DNSSEC Mailserver Domain (legacy)',
            internet_nl_mail_legacy_dnssec_email_domain: 'DNSSEC E-Mail Domain (legacy)',
            internet_nl_mail_legacy_ipv6_mailserver: 'IPV6 mailserver (legacy)',
            internet_nl_mail_legacy_ipv6_nameserver: 'IPV6 Nameserver (legacy)',

            internet_nl_web_legacy_hsts: 'HSTS (legacy)',
            internet_nl_web_legacy_dane: 'Dane (legacy)',
            internet_nl_web_legacy_tls_ncsc_web: 'TLS NCSC Web (legacy)',
            internet_nl_web_legacy_https_enforced: 'HTTPS Enforced (legacy)',
            internet_nl_web_legacy_tls_available: 'TLS Available (legacy)',
            internet_nl_web_legacy_ipv6_webserver: 'IPV6 Webserver (legacy)',
            internet_nl_web_legacy_ipv6_nameserver: 'IPV6 Nameserver (legacy)',

            // types of tests
            internet_nl_web_tls: internet_nl_messages.en.internet_nl.test_sitetls_label,
            internet_nl_web_dnssec: internet_nl_messages.en.internet_nl.test_sitednssec_label,
            internet_nl_web_ipv6: internet_nl_messages.en.internet_nl.test_siteipv6_label,

            internet_nl_mail_dashboard_tls: internet_nl_messages.en.internet_nl.test_mailtls_label,
            internet_nl_mail_dashboard_auth: internet_nl_messages.en.internet_nl.test_mailauth_label,
            internet_nl_mail_dashboard_dnssec: internet_nl_messages.en.internet_nl.test_maildnssec_label,
            internet_nl_mail_dashboard_ipv6: internet_nl_messages.en.internet_nl.test_mailipv6_label,

            // https://github.com/NLnetLabs/Internet.nl/blob/cece8255ac7f39bded137f67c94a10748970c3c7/checks/templates/domain-results.html
            internet_nl_web_https_cert_domain: internet_nl_messages.en.internet_nl.detail_web_tls_cert_hostmatch_label,
            internet_nl_web_https_http_redirect: internet_nl_messages.en.internet_nl.detail_web_tls_https_forced_label,
            internet_nl_web_https_cert_chain: internet_nl_messages.en.internet_nl.detail_web_tls_cert_trust_label,
            internet_nl_web_https_tls_version: internet_nl_messages.en.internet_nl.detail_web_tls_version_label,
            internet_nl_web_https_tls_clientreneg: internet_nl_messages.en.internet_nl.detail_web_tls_renegotiation_client_label,
            internet_nl_web_https_tls_ciphers: internet_nl_messages.en.internet_nl.detail_web_tls_ciphers_label,
            internet_nl_web_https_http_available: internet_nl_messages.en.internet_nl.todo,
            internet_nl_web_https_dane_exist: internet_nl_messages.en.internet_nl.detail_web_tls_dane_exists_label,
            internet_nl_web_https_http_compress: internet_nl_messages.en.internet_nl.detail_web_tls_http_compression_label,
            internet_nl_web_https_http_hsts: internet_nl_messages.en.internet_nl.detail_web_tls_https_hsts_label,
            internet_nl_web_https_tls_secreneg: internet_nl_messages.en.internet_nl.detail_web_tls_renegotiation_secure_label,
            internet_nl_web_https_dane_valid: internet_nl_messages.en.internet_nl.detail_web_tls_dane_valid_label,
            internet_nl_web_https_cert_pubkey: internet_nl_messages.en.internet_nl.detail_web_tls_cert_pubkey_label,
            internet_nl_web_https_cert_sig: internet_nl_messages.en.internet_nl.detail_web_tls_cert_signature_label,
            internet_nl_web_https_tls_compress: internet_nl_messages.en.internet_nl.detail_web_tls_compression_label,
            internet_nl_web_https_tls_keyexchange: internet_nl_messages.en.internet_nl.detail_web_tls_fs_params_label,
            internet_nl_web_dnssec_valid: internet_nl_messages.en.internet_nl.detail_web_dnssec_valid_label,
            internet_nl_web_dnssec_exist: internet_nl_messages.en.internet_nl.detail_web_dnssec_exists_label,
            internet_nl_web_ipv6_ws_similar: internet_nl_messages.en.internet_nl.detail_web_ipv6_web_ipv46_label,
            internet_nl_web_ipv6_ws_address: internet_nl_messages.en.internet_nl.detail_web_ipv6_web_aaaa_label,
            internet_nl_web_ipv6_ns_reach: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_reach_label,
            internet_nl_web_ipv6_ws_reach: internet_nl_messages.en.internet_nl.detail_web_ipv6_web_reach_label,
            internet_nl_web_ipv6_ns_address: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_aaaa_label,

            // https://github.com/NLnetLabs/Internet.nl/blob/cece8255ac7f39bded137f67c94a10748970c3c7/checks/templates/mail-results.html
            internet_nl_mail_starttls_cert_domain: internet_nl_messages.en.internet_nl.detail_mail_tls_cert_hostmatch_label,
            internet_nl_mail_starttls_tls_version: internet_nl_messages.en.internet_nl.detail_mail_tls_version_label,
            internet_nl_mail_starttls_cert_chain: internet_nl_messages.en.internet_nl.detail_mail_tls_cert_trust_label,
            internet_nl_mail_starttls_tls_available: internet_nl_messages.en.internet_nl.detail_mail_tls_starttls_exists_label,
            internet_nl_mail_starttls_tls_clientreneg: internet_nl_messages.en.internet_nl.detail_mail_tls_renegotiation_client_label,
            internet_nl_mail_starttls_tls_ciphers: internet_nl_messages.en.internet_nl.detail_mail_tls_ciphers_label,
            internet_nl_mail_starttls_dane_valid: internet_nl_messages.en.internet_nl.detail_mail_tls_dane_valid_label,
            internet_nl_mail_starttls_dane_exist: internet_nl_messages.en.internet_nl.detail_mail_tls_dane_exists_label,
            internet_nl_mail_starttls_tls_secreneg: internet_nl_messages.en.internet_nl.detail_mail_tls_renegotiation_secure_label,
            internet_nl_mail_starttls_dane_rollover: internet_nl_messages.en.internet_nl.detail_mail_tls_dane_rollover_label,
            internet_nl_mail_starttls_cert_pubkey: internet_nl_messages.en.internet_nl.detail_mail_tls_cert_pubkey_label,
            internet_nl_mail_starttls_cert_sig: internet_nl_messages.en.internet_nl.detail_mail_tls_cert_signature_label,
            internet_nl_mail_starttls_tls_compress: internet_nl_messages.en.internet_nl.detail_mail_tls_compression_label,
            internet_nl_mail_starttls_tls_keyexchange: internet_nl_messages.en.internet_nl.detail_mail_tls_fs_params_label,
            internet_nl_mail_auth_dmarc_policy: internet_nl_messages.en.internet_nl.detail_mail_auth_dmarc_policy_label,
            internet_nl_mail_auth_dmarc_exist: internet_nl_messages.en.internet_nl.detail_mail_auth_dmarc_label,
            internet_nl_mail_auth_spf_policy: internet_nl_messages.en.internet_nl.detail_mail_auth_spf_policy_label,
            internet_nl_mail_auth_dkim_exist: internet_nl_messages.en.internet_nl.detail_mail_auth_dkim_label,
            internet_nl_mail_auth_spf_exist: internet_nl_messages.en.internet_nl.detail_mail_auth_spf_label,
            internet_nl_mail_dnssec_mailto_exist: internet_nl_messages.en.internet_nl.todo,
            internet_nl_mail_dnssec_mailto_valid: internet_nl_messages.en.internet_nl.todo,
            internet_nl_mail_dnssec_mx_valid: internet_nl_messages.en.internet_nl.detail_mail_dnssec_mx_valid_label,
            internet_nl_mail_dnssec_mx_exist: internet_nl_messages.en.internet_nl.detail_mail_dnssec_mx_exists_label,
            internet_nl_mail_ipv6_mx_address: internet_nl_messages.en.internet_nl.detail_mail_ipv6_mx_aaaa_label,
            internet_nl_mail_ipv6_mx_reach: internet_nl_messages.en.internet_nl.detail_mail_ipv6_mx_reach_label,
            internet_nl_mail_ipv6_ns_reach: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_reach_label,
            internet_nl_mail_ipv6_ns_address: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_aaaa_label,
        },
        scan_monitor: {
            title: 'Scan monitor',
            intro: 'All scans that have happened for this account are displayed here. It gives an insight into how ' +
                'recent the most current information is. It can also help you with comparisons to select the ideal ' +
                'scan.',
            id: '#',
            type: 'Type',
            list: 'List',
            started_on: 'Started',
            finished_on: 'Finished',
            message: 'Status',
            live: 'API',
            no_scans: 'No scans have been performed yet.',
        },
        auto_refresh: {
            refresh_happening_in: 'Auto refresh in:',
            units: 's',
            refresh_now: 'refresh now'
        },
        upload: {
            bulk_data_uploader: {
                title: 'Bulk Address Uploader',
                introduction: 'It\'s possible to upload large amounts of internet addresses and lists using spreadsheets. To do so,\n' +
                    '            please expand on the example spreadsheets listed below. This shows how the data has to be structured.\n' +
                    '            Examples with and without data are provided as Open Document Spreadsheet, Microsoft Office Excel and Comma Separated.',
            },
            empty_file: 'Empty file',
            file_with_example_data: 'File with example data',
            open_document_spreadsheet: 'Open Document Spreadsheet (Libre Office)',
            microsoft_office_excel: 'Excel Spreadsheet (Microsoft Office)',
            comma_separated: 'Comma Separated (for programmers)',

            drag_and_drop_uploader: {
                title: 'Drag and drop uploader',
                first_instruction: 'To upload a bulk address file, drag it onto the \'upload\' rectangle below.',
                nomouse: 'A more conventional upload option is available below the drag and drop uploader.',
                process: 'Uploading happens in two stages.\n' +
                    '        First the progress bar is filled, this means the data is sent to this website successfully. Then\n' +
                    '        some processing happens on the server. When this processing is finished, the uploaded file icon below\n' +
                    '        will change to either Success (green, with a checkmark) or Failed (red, with a cross).',
                details_after_upload: 'Details on the status of the uploaded file can be seen afterwards in the \'recent uploads\' section below\n' +
                    '        this uploader.',
                warnings: 'Important: It\'s possible to upload up until 10000 urls in 200 categories per upload. The more\n' +
                    '        is uploaded, the more time it will take. Please wait until the upload is confirmed.',
                fallback_select_a_file: 'Select a file to upload:',
            },

            recent_uploads: {
                title: 'Recent uploads',
                intro: 'This list shows your recent uploads. The status messages give an impression of what has been ' +
                    'created or added. If something went wrong, the status contains hints on what to do next.' +
                    'if your upload was not successful',
                date: 'Date',
                filename: 'Filename',
                filesize: 'Size',
                status: 'Status',
                no_uploads: 'No files uploaded.',
            }
        }
    },
    nl: {
        charts: {
            report_bar_chart: {
                title: 'Gemiddelde adoptie standaarden, %{list_information}, %{number_of_domains} domeinen.',
                yAxis_label: 'Adoptiegraad',
            },
            report_radar_chart: {
                title: 'Gemiddelde adoptie standaarden, %{list_information}, %{number_of_domains} domeinen.',
            },
            percentage_timeline: {
                title: 'Gemiddelde adoptie standaarden over tijd.',
                yAxis_label: 'Adoptiegraad',
            }
        },

        domains: {
            add_new_list: 'Lijst toevoegen',
            button_close_label: 'Sluiten',
            button_create_list_label: 'Maak deze lijst',
        },
        domain_management: {

            button_labels: {
                configure: 'Instellingen',
                add_domains: 'Domeinen toevoegen',
                scan_now: 'Nu scannen',
                scan_now_scanning: 'Aan het scannen',
                scan_now_scanning_title: 'Nu scannen is alleen beschikbaar als er geen scan draait, en kan maximaal 1x per dag worden aangeroepen.',
                delete: 'Verwijder',
                view_csv: 'Bekijk.csv',
                timeout_for_24_hours: 'Max 1 scan/dag',
                scanning_disabled: 'Scans uitgeschakeld',
            },

            about_this_list: {
                header: 'Over deze lijst',
                last_scan_started: 'Laatste scan gestart op',
                still_running: 'loopt nog',
                finished: 'afgerond',
                not_scanned_before: 'Niet eerder gescand',
                type_of_scan_performed: 'Soort scan',
                scan_frequency: 'Scan frequentie',
                next_scheduled_scan: 'Volgende ingeplande scan',
                scanning_disabled: 'Scannen van deze lijst is uitgeschakeld.',
                latest_report: 'Meest actuele rapportage',
                open: 'openen',
            },

            domains: {
                header: 'Domeinen',
                eligeble_mail: 'E-mail scannen is mogelijk',
                unknown_eligeble_mail: 'Onbekend of E-mail scannen mogelijk is',
                not_eligeble_mail: 'Kan geen E-mail scan uitvoeren (wordt opnieuw gecheckt bij het starten van de scan)',
                eligeble_web: 'Web scan is mogelijk',
                unknown_eligeble_web: 'Niet bekend of het mogelijk is een web scan uit te voeren',
                not_eligeble_web: 'Web scan kan niet worden uitgevoerd. Dit wordt opnieuw gecheckt bij het starten van de scan.',

                button_labels: {
                    save: 'Opslaan',
                    cancel: 'Annuleren',
                    remove: 'Verwijderen',
                }
            },

            edit_form: {
                title: 'Lijst instellingen',
                cancel: 'Annuleer',
                ok: 'Opslaan'
            },

            delete_form: {
                title: 'Lijst verwijderen',
                message: 'Weet u zeker dat u deze lijst wil verwijderen? Dit kan niet ongedaan worden gemaakt.',
                cancel: 'Nee, niet verwijderen',
                ok: 'Ja, verwijder'
            },

            scan_now_form: {
                title: 'Bevestig om opnieuw te scannen',
                message: 'Een scan die nu wordt gestart heeft de volgende eigenschappen: <br>' +
                    'Een handmatige scan kan eens per dag worden gestart, mits er nog geen scan wordt uitgevoerd op deze lijst.',
                cancel: 'Annuleer',
                ok: 'Nu scannen'
            },

            bulk_add_form: {
                title: 'Toevoegen van domeinen',
                message: 'Voeg hieronder een of meerdere domeinen toe, gescheiden door een komma.',
                ok: 'Voeg bovenstaande domeinen toe aan de lijst',
                status: 'Status',
                nothing_added: 'nog niets toegevoegd.',
                added_n_to_list: 'Er zijn {0} domeinen aan de lijst toegevoegd.',
                ignored_n: 'Verder zijn er {0} domeinen genegeerd omdat ze al in de lijst zaten.',
                warning: 'Waarschuwing!',
                warning_message: 'Sommige domeinen zijn niet in een geldig formaat. Controleer de volgende domeinen en' +
                    'probeer het opnieuw:',
            }

        },
        // field name translation
        urllist: {
            field_label_id: 'id',
            field_label_name: 'Lijst naam',
            field_label_enable_scans: 'Scans uitvoeren',
            enable_scans_enabled: 'Ingeschakeld',
            enable_scans_disabled: 'Uitgeschakeld',
            field_label_scan_type: 'Welk type scan moet er worden uitgevoerd',
            scan_type_web: 'Website en webadres',
            scan_type_mail: 'E-Mail',
            field_label_automated_scan_frequency: 'Moet deze scan vaker worden uitgevoerd?',
            automated_scan_frequency_disabled: 'Nee, niet automatisch scannen',
            automated_scan_frequency_every_half_year: 'Ja, aan het begin van elk half jaar',
            automated_scan_frequency_every_quarter: 'Ja, aan het begin van elk kwartaal',
            automated_scan_frequency_every_month: 'Ja, aan het begin van elke maand',
            automated_scan_frequency_twice_per_month: 'Ja, om de twee weken vanaf de 1e van de maand',
        },
        report: {
            mail: 'E-Mail',
            web: 'Web',

            // legacy values
            mail_legacy: 'Forum Standardisation (NL) Legacy Mail Metrics',
            web_legacy: 'Forum Standardisation (NL) Legacy Web Metrics',

            internet_nl_mail_legacy_dane: 'Dane (legacy)',
            internet_nl_mail_legacy_tls_available: 'TLS Available (legacy)',
            internet_nl_mail_legacy_spf: 'SPF (legacy)',
            internet_nl_mail_legacy_dkim: 'DKIM (legacy)',
            internet_nl_mail_legacy_dmarc: 'DMARC (legacy)',
            internet_nl_mail_legacy_dnsssec_mailserver_domain: 'DNSSEC Mailserver Domain (legacy)',
            internet_nl_mail_legacy_dnssec_email_domain: 'DNSSEC E-Mail Domain (legacy)',
            internet_nl_mail_legacy_ipv6_mailserver: 'IPV6 mailserver (legacy)',
            internet_nl_mail_legacy_ipv6_nameserver: 'IPV6 Nameserver (legacy)',

            internet_nl_web_legacy_hsts: 'HSTS (legacy)',
            internet_nl_web_legacy_dane: 'Dane (legacy)',
            internet_nl_web_legacy_tls_ncsc_web: 'TLS NCSC Web (legacy)',
            internet_nl_web_legacy_https_enforced: 'HTTPS Enforced (legacy)',
            internet_nl_web_legacy_tls_available: 'TLS Available (legacy)',
            internet_nl_web_legacy_ipv6_webserver: 'IPV6 Webserver (legacy)',
            internet_nl_web_legacy_ipv6_nameserver: 'IPV6 Nameserver (legacy)',

            // types of tests
            internet_nl_web_tls: internet_nl_messages.nl.internet_nl.test_sitetls_label,
            internet_nl_web_dnssec: internet_nl_messages.nl.internet_nl.test_sitednssec_label,
            internet_nl_web_ipv6: internet_nl_messages.nl.internet_nl.test_siteipv6_label,

            internet_nl_mail_dashboard_tls: internet_nl_messages.nl.internet_nl.test_mailtls_label,
            internet_nl_mail_dashboard_auth: internet_nl_messages.nl.internet_nl.test_mailauth_label,
            internet_nl_mail_dashboard_dnssec: internet_nl_messages.nl.internet_nl.test_maildnssec_label,
            internet_nl_mail_dashboard_ipv6: internet_nl_messages.nl.internet_nl.test_mailipv6_label,

            // https://github.com/NLnetLabs/Internet.nl/blob/cece8255ac7f39bded137f67c94a10748970c3c7/checks/templates/domain-results.html
            internet_nl_web_https_cert_domain: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_hostmatch_label,
            internet_nl_web_https_http_redirect: internet_nl_messages.nl.internet_nl.detail_web_tls_https_forced_label,
            internet_nl_web_https_cert_chain: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_trust_label,
            internet_nl_web_https_tls_version: internet_nl_messages.nl.internet_nl.detail_web_tls_version_label,
            internet_nl_web_https_tls_clientreneg: internet_nl_messages.nl.internet_nl.detail_web_tls_renegotiation_client_label,
            internet_nl_web_https_tls_ciphers: internet_nl_messages.nl.internet_nl.detail_web_tls_ciphers_label,
            internet_nl_web_https_http_available: internet_nl_messages.nl.internet_nl.todo,
            internet_nl_web_https_dane_exist: internet_nl_messages.nl.internet_nl.detail_web_tls_dane_exists_label,
            internet_nl_web_https_http_compress: internet_nl_messages.nl.internet_nl.detail_web_tls_http_compression_label,
            internet_nl_web_https_http_hsts: internet_nl_messages.nl.internet_nl.detail_web_tls_https_hsts_label,
            internet_nl_web_https_tls_secreneg: internet_nl_messages.nl.internet_nl.detail_web_tls_renegotiation_secure_label,
            internet_nl_web_https_dane_valid: internet_nl_messages.nl.internet_nl.detail_web_tls_dane_valid_label,
            internet_nl_web_https_cert_pubkey: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_pubkey_label,
            internet_nl_web_https_cert_sig: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_signature_label,
            internet_nl_web_https_tls_compress: internet_nl_messages.nl.internet_nl.detail_web_tls_compression_label,
            internet_nl_web_https_tls_keyexchange: internet_nl_messages.nl.internet_nl.detail_web_tls_fs_params_label,
            internet_nl_web_dnssec_valid: internet_nl_messages.nl.internet_nl.detail_web_dnssec_valid_label,
            internet_nl_web_dnssec_exist: internet_nl_messages.nl.internet_nl.detail_web_dnssec_exists_label,
            internet_nl_web_ipv6_ws_similar: internet_nl_messages.nl.internet_nl.detail_web_ipv6_web_ipv46_label,
            internet_nl_web_ipv6_ws_address: internet_nl_messages.nl.internet_nl.detail_web_ipv6_web_aaaa_label,
            internet_nl_web_ipv6_ns_reach: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_reach_label,
            internet_nl_web_ipv6_ws_reach: internet_nl_messages.nl.internet_nl.detail_web_ipv6_web_reach_label,
            internet_nl_web_ipv6_ns_address: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_aaaa_label,

            // https://github.com/NLnetLabs/Internet.nl/blob/cece8255ac7f39bded137f67c94a10748970c3c7/checks/templates/mail-results.html
            internet_nl_mail_starttls_cert_domain: internet_nl_messages.nl.internet_nl.detail_mail_tls_cert_hostmatch_label,
            internet_nl_mail_starttls_tls_version: internet_nl_messages.nl.internet_nl.detail_mail_tls_version_label,
            internet_nl_mail_starttls_cert_chain: internet_nl_messages.nl.internet_nl.detail_mail_tls_cert_trust_label,
            internet_nl_mail_starttls_tls_available: internet_nl_messages.nl.internet_nl.detail_mail_tls_starttls_exists_label,
            internet_nl_mail_starttls_tls_clientreneg: internet_nl_messages.nl.internet_nl.detail_mail_tls_renegotiation_client_label,
            internet_nl_mail_starttls_tls_ciphers: internet_nl_messages.nl.internet_nl.detail_mail_tls_ciphers_label,
            internet_nl_mail_starttls_dane_valid: internet_nl_messages.nl.internet_nl.detail_mail_tls_dane_valid_label,
            internet_nl_mail_starttls_dane_exist: internet_nl_messages.nl.internet_nl.detail_mail_tls_dane_exists_label,
            internet_nl_mail_starttls_tls_secreneg: internet_nl_messages.nl.internet_nl.detail_mail_tls_renegotiation_secure_label,
            internet_nl_mail_starttls_dane_rollover: internet_nl_messages.nl.internet_nl.detail_mail_tls_dane_rollover_label,
            internet_nl_mail_starttls_cert_pubkey: internet_nl_messages.nl.internet_nl.detail_mail_tls_cert_pubkey_label,
            internet_nl_mail_starttls_cert_sig: internet_nl_messages.nl.internet_nl.detail_mail_tls_cert_signature_label,
            internet_nl_mail_starttls_tls_compress: internet_nl_messages.nl.internet_nl.detail_mail_tls_compression_label,
            internet_nl_mail_starttls_tls_keyexchange: internet_nl_messages.nl.internet_nl.detail_mail_tls_fs_params_label,
            internet_nl_mail_auth_dmarc_policy: internet_nl_messages.nl.internet_nl.detail_mail_auth_dmarc_policy_label,
            internet_nl_mail_auth_dmarc_exist: internet_nl_messages.nl.internet_nl.detail_mail_auth_dmarc_label,
            internet_nl_mail_auth_spf_policy: internet_nl_messages.nl.internet_nl.detail_mail_auth_spf_policy_label,
            internet_nl_mail_auth_dkim_exist: internet_nl_messages.nl.internet_nl.detail_mail_auth_dkim_label,
            internet_nl_mail_auth_spf_exist: internet_nl_messages.nl.internet_nl.detail_mail_auth_spf_label,
            internet_nl_mail_dnssec_mailto_exist: internet_nl_messages.nl.internet_nl.todo,
            internet_nl_mail_dnssec_mailto_valid: internet_nl_messages.nl.internet_nl.todo,
            internet_nl_mail_dnssec_mx_valid: internet_nl_messages.nl.internet_nl.detail_mail_dnssec_mx_valid_label,
            internet_nl_mail_dnssec_mx_exist: internet_nl_messages.nl.internet_nl.detail_mail_dnssec_mx_exists_label,
            internet_nl_mail_ipv6_mx_address: internet_nl_messages.nl.internet_nl.detail_mail_ipv6_mx_aaaa_label,
            internet_nl_mail_ipv6_mx_reach: internet_nl_messages.nl.internet_nl.detail_mail_ipv6_mx_reach_label,
            internet_nl_mail_ipv6_ns_reach: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_reach_label,
            internet_nl_mail_ipv6_ns_address: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_aaaa_label,
        },
        scan_monitor: {
            title: 'Scan monitor',
            intro: 'Alle scans die zijn uitgevoerd voor dit account staan hier. Het geeft een overzicht in hoe recent ' +
                'de data is. Het geeft ook inzicht in of de meest recente scan al is afgerond.',
            id: '#',
            type: 'Soort',
            list: 'Lijst',
            started_on: 'Gestart',
            finished_on: 'Klaar',
            message: 'Status',
            live: 'API',
            no_scans: 'Nog geen scans uitgevoerd.',
        },
        auto_refresh: {
            refresh_happening_in: 'Lijst wordt ververst over:',
            units: 's',
            refresh_now: 'ververs nu'
        },
        upload: {
            bulk_data_uploader: {
                title: 'Bulk Address Uploader',
                introduction: 'Hiermee is het mogelijk om grote hoeveelheden internet adressen en lijsten toe ' +
                    'te voegen. Dit gebeurd met spreadsheets. Begin met het downloaden van de voorbeelden hieronder, ' +
                    'deze geven aan wat het juiste formaat is. De voorbeeldbestanden zijn te downloaden in het ' +
                    'Open Document formaat, Microsoft Office formaat en Kommagescheiden.',
            },
            empty_file: 'Leeg bestand',
            file_with_example_data: 'Bestand met voorbeelddata',
            open_document_spreadsheet: 'Open Document Werkblad (Libre Office)',
            microsoft_office_excel: 'Excel Werkblad (Microsoft Office)',
            comma_separated: 'Kommagescheiden (voor programmeurs)',

            drag_and_drop_uploader: {
                title: 'Drag and drop uploader',
                first_instruction: 'Sleep het gewenste bestand in de \'upload\' rechthoek hieronder.',
                nomouse: 'Een meer gebruikelijke upload methode is beschikbaar onder het drag and drop gedeelte.',
                process: 'Het uploaden gebeurd in twee fasen. In de eerste fase wordt de voortgangsbalk gevuld. Als ' +
                    'deze vol is, is het bestand naar de server gestuurd. Dan is de upload nog niet compleet: de gegevens ' +
                    'worden nu verwerkt. Op het moment dat de gegevens verwerkt zijn verschijnt dit als een groen vinkje of' +
                    'rood kruis op het bestand.',
                details_after_upload: 'Details over de status van de upload kunnen naderhand worden bekeken ' +
                    'in het \'recente uploads\' onderdeel onder het upload veld.',
                warnings: 'Let op: Het is mogelijk om tot 10.000 adressen en 200 categorien te sturen per keer. Hoe meer' +
                    ' gegevens, hoe langer het kan duren voordat de upload volledig is. Wees geduldig en wacht tot de upload afgerond is.',
                fallback_select_a_file: 'Selecteer een bestand om te uploaden:',
            },

            recent_uploads: {
                title: 'Recent geupload',
                intro: 'Deze lijst geeft de meest recente uploads weer. De status berichten geven aan wat er is toegevoegd. ' +
                    'Mocht er iets verkeerd zijn gegaan bij het uploaden, dan is hier advies te vinden over wat te verbeteren.',
                date: 'Datum',
                filename: 'Bestand',
                filesize: 'Grootte',
                status: 'Status (in het Engels)',
                no_uploads: 'Nog geen bestanden geüpload.',
            }
        }
    },
};