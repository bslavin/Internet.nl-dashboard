const messages = {
    en: {
        icons: {
            list_closed: "List closed",
            list_opened: "List opened",

            settings: "settings",

            scan: "scan",
            can_connect: "Can connect icon",
            unknown_connectivity: "Unknown connectivity icon",
            cannot_connect: "Can not connect",

            bulk_add_new: "Add domains in bulk",
            remove_filter: 'Show categories',
            report: "report",
        },
        menu: {
            admin: 'Admin',
            domains: "Domains",
            scans: "Scans",
            reports: "Reports",
            account: "Account",
            log_off: "Log off",
            log_in: "Log in",
        },
        loading: {
            loading: "Loading...",
        },

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
            automated_scan_frequency: {
                disabled: 'Disabled',
                every_half_year: 'Every half year',
                every_quarter: 'At the start of every quarter',
                every_month: 'Every 1st day of the month',
                twice_per_month: 'Twice per month',
            },
        },

        report: {
            mail: 'E-Mail',
            web: 'Web',

            fields: {
                forum_standardistation: {
                    category_label: 'Forum Standaardisatie',
                    measurements_on_agreed_security_standards: 'Measurements on agreed security standards',
                    ipv6_monitor: 'IPv6 monitor',
                },
                additional_fields: {
                    label: 'Additional fields',
                },
            },

            icon_legend: {
                title: "Legend of used icons",

                // this has been placed here, because not_applicable and not_testable reuse icons and have
                // a different meaning. That translation is not available in internet.nl
                test_title: internet_nl_messages.en.internet_nl.faqs_report_test_title,
                test_good: internet_nl_messages.en.internet_nl.faqs_report_test_good,
                test_bad: internet_nl_messages.en.internet_nl.faqs_report_test_bad,
                test_warning: internet_nl_messages.en.internet_nl.faqs_report_test_warning,
                test_info: internet_nl_messages.en.internet_nl.faqs_report_test_info,
                subtest_title: internet_nl_messages.en.internet_nl.faqs_report_subtest_title,
                subtest_good: internet_nl_messages.en.internet_nl.faqs_report_subtest_good,
                subtest_bad: internet_nl_messages.en.internet_nl.faqs_report_subtest_bad,
                subtest_warning: internet_nl_messages.en.internet_nl.faqs_report_subtest_warning,
                subtest_info: internet_nl_messages.en.internet_nl.faqs_report_subtest_info,
                subtest_not_applicable:  "Not applicable ⇒ no score impact",
                subtest_not_testable:  "Not testable ⇒ no score impact",
            },

            header: {
                title: 'Reports',
                intro: 'Select one or multiple reports, these will be displayed below.',
                select_report: 'Select report...',
                max_elements: 'Maximum number of reports selected.',
                no_options: 'No reports available.',
            },

            charts: {
                adoption_timeline: {
                    annotation: {
                        title: 'Adoption of standards over time',
                        intro: 'This graph compares various measurements of the same list over time. ' +
                            'This provides a visual indication of the progress of standards adoption. A table with the ' +
                            'same values is avaiable below. This graph shows the average score of internet.nl. Note that ' +
                            'only the values of the first selected report are shown.'
                    },
                    title: 'Average adoption of standards. Overall.',
                    yAxis_label: 'Adoption',
                    xAxis_label: 'Date',
                    average_internet_nl_score: "Average internet.nl score",
                    accessibility_text: "A table with the content of this graph is shown below.",
                },
                magazine: {
                    intro: "Below graph only shows the average of all magazine fields. Other fields cannot be enabled/disabled and changing their visibility does " +
                        "not influence this average.",
                },
                adoption_bar_chart: {
                    annotation: {
                        title: 'Average adoption of standards ',
                        intro: 'This graph shows the average adoption per standard per report.',
                    },
                    title_single: 'Average adoption of standards, %{list_information}, %{number_of_domains} domains.',
                    title_multiple: 'Comparison of adoption of standards between %{number_of_reports} reports.',
                    yAxis_label: 'Adoption',
                    average: "Average",
                    accessibility_text: "A table with the content of this graph is shown below.",
                },
                cumulative_adoption_bar_chart: {
                    annotation: {
                        title: 'Average adoption of standards over multiple reports',
                        intro: 'This graph shows the average adoption per standard averaged over multiple reports.',
                    },
                    title: 'Average adoption of standards over %{number_of_reports} reports.',
                    yAxis_label: 'Adoption',
                    average: "Average",
                    accessibility_text: "A table with the content of this graph is shown below.",
                }
            },
            report: {
                title: 'Report',
                intro: 'This shows the results of the first selected report only.',
                url_filter: 'Filter on domain...',
                not_eligeble_for_scanning: 'Domain did not match scanning criteria at the time the scan was initiated. The scanning criteria are an SOA DNS record (not NXERROR) for mail and an A or AAAA DNS record for web.\n' +
                    '                                                This domain is ignored in all statistics.',
                zoom: {
                    buttons:
                        {
                            zoom: 'details',
                            remove_zoom: 'Back to the category view',
                            zoom_in_on: 'View details of {0}',
                        },
                    zoomed_in_on: 'Details from',
                    explanation: "Using the details buttons, it is possible to see the individual metrics for each category."
                },
                link_to_report: 'View score and report from %{url} on internet.nl.',
                empty_report: 'It looks like this report is empty... did you filter too much?',
                results: {
                    not_applicable: "Not applicable",
                    not_testable: "Not testable",
                    failed: "Failed",
                    warning: "Warning",
                    info: "Info",
                    passed: "Passed",
                    unknown: "Unknown"
                }
            },
            download: {
                title: 'Download all metrics in a spreadsheet',
                intro: 'Report data is available in the following formats:',
                xlsx: 'Excel Spreadsheet (Microsoft Office), .xlsx',
                ods: 'Open Document Spreadsheet (Libre Office), .ods',
                csv: 'Comma Separated (for programmers), .csv',
            },
            settings: {
                title: 'Select visible metrics',
                intro: 'To retain focus, select the fields that are relevant to your organization.',
                buttons: {
                    reset: 'Reset',
                    reset_label: 'Resets all values to their original status.',
                    save: 'Save',
                    save_label: 'Save the changes made in this form.',
                },
                restored_from_database: "Settings restored from database",
                updated: "Settings updated",

                show_category: "Show this category",
                show_dynamic_average: "Show dynamic average",
                only_show_dynamic_average: "Only show dynamic average",
            },

            // Nofix: should we use hierarchical translations, which is much prettier? How?
            // we're not going to do that, because it requires extra code that chops the
            // labels into pieces. And it's not really clear where to do that. It would require
            // a lot of work, extra code and things do not get clearer from it that much it's worth the effort.
            /*internet_nl: {
                mail: {
                    legacy: {
                        dmarc: 'DMARC',
                        dkim: 'DKIM',
                        spf: 'SPF',
                        dmarc_policy: 'DMARC policy',
                        spf_policy: 'SPF policy',
                        start_tls: 'STARTTLS',
                        start_tls_ncsc: 'STARTTLS NCSC',
                        dnssec: {
                            email_domain: 'DNSSEC e-mail domain',
                            mx: 'DNSSEC MX',
                        },
                        dane: 'DANE',
                        ipv6: {
                            nameserver: 'IPv6 nameserver',
                            mailserver: 'IPv6 mailserver',
                        }

                    }
                }
            },
            */

            // These fields do not have a hierarchical translation, this is how they are in websecmap.
            // they are not 1-1 with the frontend. So have their own label for greater consistency.
            // Test results
            not_testable: 'Not testable',
            not_applicable: 'Not applicable',

            // legacy values
            mail_legacy: 'Mail Baseline NL Government',
            web_legacy: 'Web Baseline NL Government',

            internet_nl_mail_legacy_dmarc: 'DMARC',
            internet_nl_mail_legacy_dmarc_explanation: 'Explanation',
            internet_nl_mail_legacy_dkim: 'DKIM',
            internet_nl_mail_legacy_dkim_explanation: 'Explanation',
            internet_nl_mail_legacy_spf: 'SPF',
            internet_nl_mail_legacy_spf_explanation: 'Explanation',
            internet_nl_mail_legacy_dmarc_policy: 'DMARC policy',
            internet_nl_mail_legacy_dmarc_policy_explanation: 'Explanation',
            internet_nl_mail_legacy_spf_policy: 'SPF policy',
            internet_nl_mail_legacy_spf_policy_explanation: 'Explanation',
            internet_nl_mail_legacy_start_tls: 'STARTTLS',
            internet_nl_mail_legacy_start_tls_explanation: 'Explanation',
            internet_nl_mail_legacy_start_tls_ncsc: 'STARTTLS NCSC',
            internet_nl_mail_legacy_start_tls_ncsc_explanation: 'Explanation',
            internet_nl_mail_legacy_dnssec_mx: 'DNSSEC MX',
            internet_nl_mail_legacy_dnssec_mx_explanation: 'Explanation',
            internet_nl_mail_legacy_dane: 'DANE',
            internet_nl_mail_legacy_dane_explanation: 'Explanation',
            internet_nl_mail_legacy_ipv6_nameserver: 'IPv6 nameserver',
            internet_nl_mail_legacy_ipv6_nameserver_explanation: 'Explanation',
            internet_nl_mail_legacy_ipv6_mailserver: "IPv6 mailserver",
            internet_nl_mail_legacy_ipv6_mailserver_explanation: 'Explanation',

            internet_nl_web_legacy_dnssec: 'DNSSEC',
            internet_nl_web_legacy_dnssec_explanation: 'Explanation...',
            internet_nl_web_legacy_tls_available: 'TLS',
            internet_nl_web_legacy_tls_available_explanation: 'Explanation...',
            internet_nl_web_legacy_tls_ncsc_web: 'TLS_NCSC',
            internet_nl_web_legacy_tls_ncsc_web_explanation: 'Explanation...',
            internet_nl_web_legacy_https_enforced: 'HTTPS',
            internet_nl_web_legacy_https_enforced_explanation: 'Explanation...',
            internet_nl_web_legacy_hsts: 'HSTS',
            internet_nl_web_legacy_hsts_explanation: 'Explanation...',
            internet_nl_web_legacy_ipv6_nameserver: 'IPv6 nameserver',
            internet_nl_web_legacy_ipv6_nameserver_explanation: 'Explanation...',
            internet_nl_web_legacy_ipv6_webserver: 'IPv6 webserver',
            internet_nl_web_legacy_ipv6_webserver_explanation: 'Explanation...',
            // internet_nl_web_legacy_dane: 'DANE',

            internet_nl_web_tls: internet_nl_messages.en.internet_nl.test_sitetls_label,
            internet_nl_web_dnssec: internet_nl_messages.en.internet_nl.test_sitednssec_label,
            internet_nl_web_ipv6: internet_nl_messages.en.internet_nl.test_siteipv6_label,

            internet_nl_mail_dashboard_tls: internet_nl_messages.en.internet_nl.test_mailtls_label,
            internet_nl_mail_dashboard_auth: internet_nl_messages.en.internet_nl.test_mailauth_label,
            internet_nl_mail_dashboard_dnssec: internet_nl_messages.en.internet_nl.test_maildnssec_label,
            internet_nl_mail_dashboard_ipv6: internet_nl_messages.en.internet_nl.test_mailipv6_label,

            // web category verdicts
            internet_nl_web_ipv6_verdict_good: internet_nl_messages.en.internet_nl.test_siteipv6_passed_summary,
            internet_nl_web_ipv6_verdict_bad: internet_nl_messages.en.internet_nl.test_siteipv6_failed_summary,
            internet_nl_web_appsecpriv_verdict_good: internet_nl_messages.en.internet_nl.test_siteappsecpriv_passed_summary,
            internet_nl_web_appsecpriv_verdict_bad: internet_nl_messages.en.internet_nl.test_siteappsecpriv_failed_summary,
            internet_nl_web_tls_verdict_good: internet_nl_messages.en.internet_nl.test_sitetls_passed_summary,
            internet_nl_web_tls_verdict_bad: internet_nl_messages.en.internet_nl.test_sitetls_failed_summary,
            internet_nl_web_dnssec_verdict_good: internet_nl_messages.en.internet_nl.test_sitednssec_passed_summary,
            internet_nl_web_dnssec_verdict_bad: internet_nl_messages.en.internet_nl.test_sitednssec_failed_summary,

            // mail category verdicts
            internet_nl_mail_dashboard_tls_verdict_good: internet_nl_messages.en.internet_nl.test_mailtls_passed_summary,
            internet_nl_mail_dashboard_tls_verdict_bad: internet_nl_messages.en.internet_nl.test_mailtls_failed_summary,
            internet_nl_mail_dashboard_auth_verdict_good: internet_nl_messages.en.internet_nl.test_mailauth_passed_summary,
            internet_nl_mail_dashboard_auth_verdict_bad: internet_nl_messages.en.internet_nl.test_mailauth_failed_summary,
            internet_nl_mail_dashboard_dnssec_verdict_good: internet_nl_messages.en.internet_nl.test_maildnssec_passed_summary,
            internet_nl_mail_dashboard_dnssec_verdict_bad: internet_nl_messages.en.internet_nl.test_maildnssec_failed_summary,
            internet_nl_mail_dashboard_ipv6_verdict_good: internet_nl_messages.en.internet_nl.test_mailipv6_passed_summary,
            internet_nl_mail_dashboard_ipv6_verdict_bad: internet_nl_messages.en.internet_nl.test_mailipv6_failed_summary,

            // https://github.com/NLnetLabs/Internet.nl/blob/cece8255ac7f39bded137f67c94a10748970c3c7/checks/templates/domain-results.html
            internet_nl_web_appsecpriv: internet_nl_messages.en.internet_nl.test_siteappsecpriv_label,  // Added 24 May 2019
            internet_nl_web_appsecpriv_csp: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_csp_label,  // Added 24 May 2019
            internet_nl_web_appsecpriv_referrer_policy: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_referrer_policy_label,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_content_type_options: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_x_content_type_label,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_frame_options: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_x_frame_label,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_xss_protection: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_x_xss_label,  // Added 24 May 2019
            internet_nl_web_https_cert_domain: internet_nl_messages.en.internet_nl.detail_web_tls_cert_hostmatch_label,
            internet_nl_web_https_http_redirect: internet_nl_messages.en.internet_nl.detail_web_tls_https_forced_label,
            internet_nl_web_https_cert_chain: internet_nl_messages.en.internet_nl.detail_web_tls_cert_trust_label,
            internet_nl_web_https_tls_version: internet_nl_messages.en.internet_nl.detail_web_tls_version_label,
            internet_nl_web_https_tls_clientreneg: internet_nl_messages.en.internet_nl.detail_web_tls_renegotiation_client_label,
            internet_nl_web_https_tls_ciphers: internet_nl_messages.en.internet_nl.detail_web_tls_ciphers_label,
            internet_nl_web_https_http_available: internet_nl_messages.en.internet_nl.detail_web_tls_https_exists_label,
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

            // verdicts:
            internet_nl_web_appsecpriv_csp_verdict_good: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_csp_verdict_good,  // Added 24 May 2019
            internet_nl_web_appsecpriv_referrer_policy_verdict_good: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_referrer_policy_verdict_good,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_content_type_options_verdict_good: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_x_content_type_verdict_good,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_frame_options_verdict_good: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_x_frame_verdict_good,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_xss_protection_verdict_good: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_x_xss_verdict_good,  // Added 24 May 2019
            internet_nl_web_https_cert_domain_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_cert_hostmatch_verdict_good,
            internet_nl_web_https_http_redirect_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_https_forced_verdict_good,
            internet_nl_web_https_cert_chain_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_cert_trust_verdict_good,
            internet_nl_web_https_tls_version_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_version_verdict_good,
            internet_nl_web_https_tls_clientreneg_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_renegotiation_client_verdict_good,
            internet_nl_web_https_tls_ciphers_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_ciphers_verdict_good,
            internet_nl_web_https_http_available_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_https_exists_verdict_good,
            internet_nl_web_https_dane_exist_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_dane_exists_verdict_good,
            internet_nl_web_https_http_compress_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_http_compression_verdict_good,
            internet_nl_web_https_http_hsts_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_https_hsts_verdict_good,
            internet_nl_web_https_tls_secreneg_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_renegotiation_secure_verdict_good,
            internet_nl_web_https_dane_valid_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_dane_valid_verdict_good,
            internet_nl_web_https_cert_pubkey_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_cert_pubkey_verdict_good,
            internet_nl_web_https_cert_sig_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_cert_signature_verdict_good,
            internet_nl_web_https_tls_compress_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_compression_verdict_good,
            internet_nl_web_https_tls_keyexchange_verdict_good: internet_nl_messages.en.internet_nl.detail_web_tls_fs_params_verdict_good,
            internet_nl_web_dnssec_valid_verdict_good: internet_nl_messages.en.internet_nl.detail_web_dnssec_valid_verdict_good,
            internet_nl_web_dnssec_exist_verdict_good: internet_nl_messages.en.internet_nl.detail_web_dnssec_exists_verdict_good,
            internet_nl_web_ipv6_ws_similar_verdict_good: internet_nl_messages.en.internet_nl.detail_web_ipv6_web_ipv46_verdict_good,
            internet_nl_web_ipv6_ws_address_verdict_good: internet_nl_messages.en.internet_nl.detail_web_ipv6_web_aaaa_verdict_good,
            internet_nl_web_ipv6_ns_reach_verdict_good: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_reach_verdict_good,
            internet_nl_web_ipv6_ws_reach_verdict_good: internet_nl_messages.en.internet_nl.detail_web_ipv6_web_reach_verdict_good,
            internet_nl_web_ipv6_ns_address_verdict_good: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_aaaa_verdict_good,

            internet_nl_web_appsecpriv_csp_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_csp_verdict_bad,  // Added 24 May 2019
            internet_nl_web_appsecpriv_referrer_policy_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_referrer_policy_verdict_bad,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_content_type_options_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_x_content_type_verdict_bad,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_frame_options_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_x_frame_verdict_bad,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_xss_protection_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_appsecpriv_http_x_xss_verdict_bad,  // Added 24 May 2019
            internet_nl_web_https_cert_domain_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_cert_hostmatch_verdict_bad,
            internet_nl_web_https_http_redirect_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_https_forced_verdict_bad,
            internet_nl_web_https_cert_chain_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_cert_trust_verdict_bad,
            internet_nl_web_https_tls_version_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_version_verdict_bad,
            internet_nl_web_https_tls_clientreneg_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_renegotiation_client_verdict_bad,
            internet_nl_web_https_tls_ciphers_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_ciphers_verdict_bad,
            internet_nl_web_https_http_available_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_https_exists_verdict_bad,
            internet_nl_web_https_dane_exist_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_dane_exists_verdict_bad,
            internet_nl_web_https_http_compress_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_http_compression_verdict_bad,
            internet_nl_web_https_http_hsts_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_https_hsts_verdict_bad,
            internet_nl_web_https_tls_secreneg_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_renegotiation_secure_verdict_bad,
            internet_nl_web_https_dane_valid_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_dane_valid_verdict_bad,
            internet_nl_web_https_cert_pubkey_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_cert_pubkey_verdict_bad,
            internet_nl_web_https_cert_sig_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_cert_signature_verdict_bad,
            internet_nl_web_https_tls_compress_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_compression_verdict_bad,
            internet_nl_web_https_tls_keyexchange_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_tls_fs_params_verdict_bad,
            internet_nl_web_dnssec_valid_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_dnssec_valid_verdict_bad,
            internet_nl_web_dnssec_exist_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_dnssec_exists_verdict_bad,
            internet_nl_web_ipv6_ws_similar_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_ipv6_web_ipv46_verdict_bad,
            internet_nl_web_ipv6_ws_address_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_ipv6_web_aaaa_verdict_bad,
            internet_nl_web_ipv6_ns_reach_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_reach_verdict_bad,
            internet_nl_web_ipv6_ws_reach_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_ipv6_web_reach_verdict_bad,
            internet_nl_web_ipv6_ns_address_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_aaaa_verdict_bad,

            // https://github.com/NLnetLabs/Internet.nl/blob/cece8255ac7f39bded137f67c94a10748970c3c7/checks/templates/mail-results.html
            internet_nl_mail_server_configured: 'Mail Server Configured (not in UI)',  // Added 24th of May 2019
            internet_nl_mail_servers_testable: 'Mail Server Testable (not in UI)',  // Added 24th of May 2019
            internet_nl_mail_starttls_dane_ta: 'Mail STARTTLS Dane TA (not in UI)',  // Added 24th of May 2019
            internet_nl_mail_non_sending_domain: 'Mail Non Sending Domain (not in UI)',  // Added 24th of May 2019
            internet_nl_mail_auth_dmarc_policy_only: 'Mail Auth DMARC Policy Only (not in UI)',   // Added 24th of May 2019
            internet_nl_mail_auth_dmarc_ext_destination: 'Mail Auth DMARC Ext Destination (not in UI)',  // Added 24th of May 2019

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
            internet_nl_mail_dnssec_mailto_exist: internet_nl_messages.en.internet_nl.detail_mail_dnssec_exists_label,
            internet_nl_mail_dnssec_mailto_valid: internet_nl_messages.en.internet_nl.detail_mail_dnssec_valid_label,
            internet_nl_mail_dnssec_mx_valid: internet_nl_messages.en.internet_nl.detail_mail_dnssec_mx_valid_label,
            internet_nl_mail_dnssec_mx_exist: internet_nl_messages.en.internet_nl.detail_mail_dnssec_mx_exists_label,
            internet_nl_mail_ipv6_mx_address: internet_nl_messages.en.internet_nl.detail_mail_ipv6_mx_aaaa_label,
            internet_nl_mail_ipv6_mx_reach: internet_nl_messages.en.internet_nl.detail_mail_ipv6_mx_reach_label,
            internet_nl_mail_ipv6_ns_reach: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_reach_label,
            internet_nl_mail_ipv6_ns_address: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_aaaa_label,

            //
            internet_nl_mail_starttls_cert_domain_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_cert_hostmatch_verdict_good,
            internet_nl_mail_starttls_tls_version_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_version_verdict_good,
            internet_nl_mail_starttls_cert_chain_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_cert_trust_verdict_good,
            internet_nl_mail_starttls_tls_available_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_starttls_exists_verdict_good,
            internet_nl_mail_starttls_tls_clientreneg_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_renegotiation_client_verdict_good,
            internet_nl_mail_starttls_tls_ciphers_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_ciphers_verdict_good,
            internet_nl_mail_starttls_dane_valid_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_dane_valid_verdict_good,
            internet_nl_mail_starttls_dane_exist_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_dane_exists_verdict_good,
            internet_nl_mail_starttls_tls_secreneg_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_renegotiation_secure_verdict_good,
            internet_nl_mail_starttls_dane_rollover_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_dane_rollover_verdict_good,
            internet_nl_mail_starttls_cert_pubkey_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_cert_pubkey_verdict_good,
            internet_nl_mail_starttls_cert_sig_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_cert_signature_verdict_good,
            internet_nl_mail_starttls_tls_compress_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_compression_verdict_good,
            internet_nl_mail_starttls_tls_keyexchange_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_tls_fs_params_verdict_good,
            internet_nl_mail_auth_dmarc_policy_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_auth_dmarc_policy_verdict_good,
            internet_nl_mail_auth_dmarc_exist_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_auth_dmarc_verdict_good,
            internet_nl_mail_auth_spf_policy_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_auth_spf_policy_verdict_good,
            internet_nl_mail_auth_dkim_exist_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_auth_dkim_verdict_good,
            internet_nl_mail_auth_spf_exist_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_auth_spf_verdict_good,
            internet_nl_mail_dnssec_mailto_exist_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_dnssec_exists_verdict_good,
            internet_nl_mail_dnssec_mailto_valid_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_dnssec_valid_verdict_good,
            internet_nl_mail_dnssec_mx_valid_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_dnssec_mx_valid_verdict_good,
            internet_nl_mail_dnssec_mx_exist_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_dnssec_mx_exists_verdict_good,
            internet_nl_mail_ipv6_mx_address_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_ipv6_mx_aaaa_verdict_good,
            internet_nl_mail_ipv6_mx_reach_verdict_good: internet_nl_messages.en.internet_nl.detail_mail_ipv6_mx_reach_verdict_good,
            internet_nl_mail_ipv6_ns_reach_verdict_good: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_reach_verdict_good,
            internet_nl_mail_ipv6_ns_address_verdict_good: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_aaaa_verdict_good,

            //
            internet_nl_mail_starttls_cert_domain_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_cert_hostmatch_verdict_bad,
            internet_nl_mail_starttls_tls_version_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_version_verdict_bad,
            internet_nl_mail_starttls_cert_chain_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_cert_trust_verdict_bad,
            internet_nl_mail_starttls_tls_available_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_starttls_exists_verdict_bad,
            internet_nl_mail_starttls_tls_clientreneg_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_renegotiation_client_verdict_bad,
            internet_nl_mail_starttls_tls_ciphers_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_ciphers_verdict_bad,
            internet_nl_mail_starttls_dane_valid_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_dane_valid_verdict_bad,
            internet_nl_mail_starttls_dane_exist_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_dane_exists_verdict_bad,
            internet_nl_mail_starttls_tls_secreneg_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_renegotiation_secure_verdict_bad,
            internet_nl_mail_starttls_dane_rollover_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_dane_rollover_verdict_bad,
            internet_nl_mail_starttls_cert_pubkey_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_cert_pubkey_verdict_bad,
            internet_nl_mail_starttls_cert_sig_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_cert_signature_verdict_bad,
            internet_nl_mail_starttls_tls_compress_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_compression_verdict_bad,
            internet_nl_mail_starttls_tls_keyexchange_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_tls_fs_params_verdict_bad,
            internet_nl_mail_auth_dmarc_policy_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_auth_dmarc_policy_verdict_bad,
            internet_nl_mail_auth_dmarc_exist_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_auth_dmarc_verdict_bad,
            internet_nl_mail_auth_spf_policy_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_auth_spf_policy_verdict_bad,
            internet_nl_mail_auth_dkim_exist_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_auth_dkim_verdict_bad,
            internet_nl_mail_auth_spf_exist_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_auth_spf_verdict_bad,
            internet_nl_mail_dnssec_mailto_exist_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_dnssec_exists_verdict_bad,
            internet_nl_mail_dnssec_mailto_valid_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_dnssec_valid_verdict_bad,
            internet_nl_mail_dnssec_mx_valid_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_dnssec_mx_valid_verdict_bad,
            internet_nl_mail_dnssec_mx_exist_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_dnssec_mx_exists_verdict_bad,
            internet_nl_mail_ipv6_mx_address_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_ipv6_mx_aaaa_verdict_bad,
            internet_nl_mail_ipv6_mx_reach_verdict_bad: internet_nl_messages.en.internet_nl.detail_mail_ipv6_mx_reach_verdict_bad,
            internet_nl_mail_ipv6_ns_reach_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_reach_verdict_bad,
            internet_nl_mail_ipv6_ns_address_verdict_bad: internet_nl_messages.en.internet_nl.detail_web_mail_ipv6_ns_aaaa_verdict_bad,
        },
        scan_monitor: {
            title: 'Scan monitor',
            intro: 'All scans that have happened for this account are displayed here. It gives an insight into how ' +
                'recent the most current information is. It can also help you with comparisons to select the ideal ' +
                'scan.',
            id: ' scan #',
            type: 'Type',
            list: 'List',
            started_on: 'Started',
            finished_on: 'Finished',
            message: 'Status',
            live: 'API',
            no_scans: 'No scans have been performed yet.',
            report: 'Report',
            runtime: 'Runtime',
            open_in_api: 'Open on internet.nl API',
            open_report: 'Open report',
            last_check: 'Last status update',
            report_is_being_generated: 'Report is being generated.',
            processing_results: 'Processing results.',
        },
        auto_refresh: {
            refresh_happening_in: 'Auto refresh in:',
            units: 's',
            refresh_now: 'refresh now'
        },



    },
    nl: {

        menu: {
            admin: 'Beheer',
            domains: "Domeinen",
            scans: "Scans",
            reports: "Rapporten",
            account: "Account",
            log_off: "Uitloggen",
            log_in: "Inloggen",
        },

        loading: {
            loading: "Laden...",
        },

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
            automated_scan_frequency: {
                disabled: 'Nee, niet automatisch scannen',
                every_half_year: 'Ja, aan het begin van elk half jaar',
                every_quarter: 'Ja, aan het begin van elk kwartaal',
                every_month: 'Ja, aan het begin van elke maand',
                twice_per_month: 'Ja, om de twee weken vanaf de 1e van de maand',
            },
        },

        report: {
            mail: 'E-Mail',
            web: 'Web',

            fields: {
                forum_standardistation: {
                    category_label: 'Forum Standaardisatie',
                    measurements_on_agreed_security_standards: 'Measurements on agreed security standards',
                    ipv6_monitor: 'IPv6 monitor',
                },
                additional_fields: {
                    label: 'Additionele velden',
                },
            },

            icon_legend: {
                title: "Legenda van gebruikte pictogrammen",

                // this has been placed here, because not_applicable and not_testable reuse icons and have
                // a different meaning. That translation is not available in internet.nl
                test_title: internet_nl_messages.nl.internet_nl.faqs_report_test_title,
                test_good: internet_nl_messages.nl.internet_nl.faqs_report_test_good,
                test_bad: internet_nl_messages.nl.internet_nl.faqs_report_test_bad,
                test_warning: internet_nl_messages.nl.internet_nl.faqs_report_test_warning,
                test_info: internet_nl_messages.nl.internet_nl.faqs_report_test_info,
                subtest_title: internet_nl_messages.nl.internet_nl.faqs_report_subtest_title,
                subtest_good: internet_nl_messages.nl.internet_nl.faqs_report_subtest_good,
                subtest_bad: internet_nl_messages.nl.internet_nl.faqs_report_subtest_bad,
                subtest_warning: internet_nl_messages.nl.internet_nl.faqs_report_subtest_warning,
                subtest_info: internet_nl_messages.nl.internet_nl.faqs_report_subtest_info,
                subtest_not_applicable:  "Niet van toepassing ⇒ geen score impact",
                subtest_not_testable:  "Niet testbaar ⇒ geen score impact",
            },

            header: {
                title: 'Rapporten',
                intro: '',
                select_report: 'Selecteer rapport...',
                max_elements: 'Maximum aantal rapporten geselecteerd.',
                no_options: 'Geen rapporten beschikbaar.',
            },

            charts: {
                adoption_timeline: {
                    annotation: {
                        title: 'Adoptie van standaarden over tijd.',
                        intro: 'Deze grafiek toont verschillende metingen van dezelfde lijst over tijd. ' +
                            'Dit geeft zicht over de voortgang van de adoptie van standaarden. Het toont de gemiddelde score van internet.nl. ' +
                            'Deze grafiek toont alleen de gemiddelden van het eerst geselecteerde rapport.'
                    },
                    title: 'Gemiddelde adoptie van standaarden over tijd.',
                    yAxis_label: 'Adoptiegraad',
                    xAxis_label: 'Datum',
                    average_internet_nl_score: "Gemiddelde internet.nl score",
                    accessibility_text: "Een tabel met de inhoud van deze grafiek wordt hieronder getoond.",
                },
                magazine: {
                    intro: "Onderstaande grafiek toont het gemiddelde van alle magazine velden. Deze grafiek kan niet worden aangepast, ook niet door de zichtbaarheid van velden aan te passen.",
                },
                adoption_bar_chart: {
                    annotation: {
                        title: 'Adoptie van standaarden',
                        intro: 'Deze grafiek toont het percentage adoptie per categorie en onderliggende metingen.',
                    },
                    title_single: 'Adoptie van standaarden, %{list_information}, %{number_of_domains} domeinen.',
                    title_multiple: 'Vergelijking adoptie van standaarden tussen %{number_of_reports} rapporten.',
                    yAxis_label: 'Adoptiegraad',
                    average: "Gemiddeld",
                    accessibility_text: "Een tabel met de inhoud van deze grafiek wordt hieronder getoond.",
                },
                cumulative_adoption_bar_chart: {
                    annotation: {
                        title: 'Gemiddelde adoptie, waarbij rapporten bij elkaar worden opgeteld',
                        intro: 'In deze grafiek worden de geselecteerde rapporten bij elkaar opgeteld, en daar het gemiddelde van getoond.',
                    },
                    title: 'Gemiddelde adoptie van standaarden van %{number_of_reports} rapporten.',
                    yAxis_label: 'Adoptiegraad',
                    average: "Gemiddeld",
                    accessibility_text: "Een tabel met de inhoud van deze grafiek wordt hieronder getoond.",
                }
            },
            report: {
                title: 'Rapport',
                intro: 'Dit overzicht laat alleen de resultaten van het het eerst geselecteerde rapport zien.',
                not_eligeble_for_scanning: 'Dit domein voldeed niet aan de scan-criteria op het moment van scannen. Deze criteria zijn een SOA DNS record (geen NXERROR) voor mail en een A of AAAA DNS record voor web.\n' +
                    ' Dit domein komt niet terug in de statistieken.',
                url_filter: 'Filter op domein...',
                zoom: {
                    buttons:
                        {
                            zoom: 'details',
                            remove_zoom: 'Terug naar hoofdniveau',
                            zoom_in_on: 'Bekijk de details van {0}',
                        },
                    zoomed_in_on: 'Details van ',
                    explanation: "Met de detail buttons is het mogelijk om details van ieder categorie naar voren te halen."
                },
                link_to_report: 'Bekijk de score en rapportage van %{url} op internet.nl.',
                empty_report: 'Geen meetgegevens gevonden, wordt er misschien teveel gefilterd?',
                results: {
                    not_applicable: "Niet van toepassing",
                    not_testable: "Niet testbaar",
                    failed: "Niet goed",
                    warning: "Waarschuwing",
                    info: "Info",
                    passed: "Goed",
                    unknown: "Unknown"
                }
            },
            download: {
                title: 'Downloaden',
                intro: 'De data in dit rapport is beschikbaar in de volgende formaten:',
                xlsx: 'Excel Spreadsheet (voor o.a. Microsoft Office), .xlsx',
                ods: 'Open Document Spreadsheet (voor o.a. Libre Office), .ods',
                csv: 'Comma Separated (voor programmeurs), .csv',
            },
            settings: {
                title: 'Selecteer zichtbare meetwaarden',
                intro: 'Selecteer de velden die relevant zijn voor uw organisatie.',
                buttons: {
                    reset: 'Reset',
                    reset_label: 'Zet de originele waardes terug naar de waardes in de database',
                    save: 'Opslaan',
                    save_label: 'Sla de wijzigingen in de zichtbare meetwaarden op.',
                },
                restored_from_database: "Zichtbare meetwaarden zijn teruggezet naar de waardes in de database",
                updated: "Zichtbare meetwaarden opgeslagen",

                show_category: "Toon deze categorie",
                show_dynamic_average: "Bereken dynamisch het gemiddelde van alle zichtbare velden",
                only_show_dynamic_average: "Toon alleen het dynamisch berekende gemiddelde",
            },

            // legacy values
            mail_legacy: 'Measurements on agreed security standards + IPv6 Monitor',
            web_legacy: 'Measurements on agreed security standards + IPv6 Monitor',

            internet_nl_mail_legacy_dmarc: 'DMARC',
            internet_nl_mail_legacy_dmarc_explanation: 'Uitleg',
            internet_nl_mail_legacy_dkim: 'DKIM',
            internet_nl_mail_legacy_dkim_explanation: 'Uitleg',
            internet_nl_mail_legacy_spf: 'SPF',
            internet_nl_mail_legacy_spf_explanation: 'Uitleg',
            internet_nl_mail_legacy_dmarc_policy: 'DMARC policy',
            internet_nl_mail_legacy_dmarc_policy_explanation: 'Uitleg',
            internet_nl_mail_legacy_spf_policy: 'SPF policy',
            internet_nl_mail_legacy_spf_policy_explanation: 'Uitleg',
            internet_nl_mail_legacy_start_tls: 'STARTTLS',
            internet_nl_mail_legacy_start_tls_explanation: 'Uitleg',
            internet_nl_mail_legacy_start_tls_ncsc: 'STARTTLS NCSC',
            internet_nl_mail_legacy_start_tls_ncsc_explanation: 'Uitleg',
            internet_nl_mail_legacy_dnssec_mx: 'DNSSEC MX',
            internet_nl_mail_legacy_dnssec_mx_explanation: 'Uitleg',
            internet_nl_mail_legacy_dane: 'DANE',
            internet_nl_mail_legacy_dane_explanation: 'Uitleg',
            internet_nl_mail_legacy_ipv6_nameserver: 'IPv6 nameserver',
            internet_nl_mail_legacy_ipv6_nameserver_explanation: 'Uitleg',
            internet_nl_mail_legacy_ipv6_mailserver: "IPv6 mailserver",
            internet_nl_mail_legacy_ipv6_mailserver_explanation: 'Uitleg',

            internet_nl_web_legacy_dnssec: 'DNSSEC',
            internet_nl_web_legacy_dnssec_explanation: 'Uitleg...',
            internet_nl_web_legacy_tls_available: 'TLS',
            internet_nl_web_legacy_tls_available_explanation: 'Uitleg...',
            internet_nl_web_legacy_tls_ncsc_web: 'TLS_NCSC',
            internet_nl_web_legacy_tls_ncsc_web_explanation: 'Uitleg...',
            internet_nl_web_legacy_https_enforced: 'HTTPS',
            internet_nl_web_legacy_https_enforced_explanation: 'Uitleg...',
            internet_nl_web_legacy_hsts: 'HSTS',
            internet_nl_web_legacy_hsts_explanation: 'Uitleg...',
            internet_nl_web_legacy_ipv6_nameserver: 'IPv6 nameserver',
            internet_nl_web_legacy_ipv6_nameserver_explanation: 'Uitleg...',
            internet_nl_web_legacy_ipv6_webserver: 'IPv6 webserver',
            internet_nl_web_legacy_ipv6_webserver_explanation: 'Uitleg...',

            // use the labels from fallback language.

            // types of tests
            internet_nl_web_tls: internet_nl_messages.nl.internet_nl.test_sitetls_label,
            internet_nl_web_dnssec: internet_nl_messages.nl.internet_nl.test_sitednssec_label,
            internet_nl_web_ipv6: internet_nl_messages.nl.internet_nl.test_siteipv6_label,

            internet_nl_mail_dashboard_tls: internet_nl_messages.nl.internet_nl.test_mailtls_label,
            internet_nl_mail_dashboard_auth: internet_nl_messages.nl.internet_nl.test_mailauth_label,
            internet_nl_mail_dashboard_dnssec: internet_nl_messages.nl.internet_nl.test_maildnssec_label,
            internet_nl_mail_dashboard_ipv6: internet_nl_messages.nl.internet_nl.test_mailipv6_label,

            // web category verdicts
            internet_nl_web_ipv6_verdict_good: internet_nl_messages.nl.internet_nl.test_siteipv6_passed_summary,
            internet_nl_web_ipv6_verdict_bad: internet_nl_messages.nl.internet_nl.test_siteipv6_failed_summary,
            internet_nl_web_appsecpriv_verdict_good: internet_nl_messages.nl.internet_nl.test_siteappsecpriv_passed_summary,
            internet_nl_web_appsecpriv_verdict_bad: internet_nl_messages.nl.internet_nl.test_siteappsecpriv_failed_summary,
            internet_nl_web_tls_verdict_good: internet_nl_messages.nl.internet_nl.test_sitetls_passed_summary,
            internet_nl_web_tls_verdict_bad: internet_nl_messages.nl.internet_nl.test_sitetls_failed_summary,
            internet_nl_web_dnssec_verdict_good: internet_nl_messages.nl.internet_nl.test_sitednssec_passed_summary,
            internet_nl_web_dnssec_verdict_bad: internet_nl_messages.nl.internet_nl.test_sitednssec_failed_summary,

            // mail category verdicts
            internet_nl_mail_dashboard_tls_verdict_good: internet_nl_messages.nl.internet_nl.test_mailtls_passed_summary,
            internet_nl_mail_dashboard_tls_verdict_bad: internet_nl_messages.nl.internet_nl.test_mailtls_failed_summary,
            internet_nl_mail_dashboard_auth_verdict_good: internet_nl_messages.nl.internet_nl.test_mailauth_passed_summary,
            internet_nl_mail_dashboard_auth_verdict_bad: internet_nl_messages.nl.internet_nl.test_mailauth_failed_summary,
            internet_nl_mail_dashboard_dnssec_verdict_good: internet_nl_messages.nl.internet_nl.test_maildnssec_passed_summary,
            internet_nl_mail_dashboard_dnssec_verdict_bad: internet_nl_messages.nl.internet_nl.test_maildnssec_failed_summary,
            internet_nl_mail_dashboard_ipv6_verdict_good: internet_nl_messages.nl.internet_nl.test_mailipv6_passed_summary,
            internet_nl_mail_dashboard_ipv6_verdict_bad: internet_nl_messages.nl.internet_nl.test_mailipv6_failed_summary,

            // https://github.com/NLnetLabs/Internet.nl/blob/cece8255ac7f39bded137f67c94a10748970c3c7/checks/templates/domain-results.html
            internet_nl_web_appsecpriv: internet_nl_messages.nl.internet_nl.results_domain_appsecpriv_http_headers_label,  // Added 24 May 2019
            internet_nl_web_appsecpriv_csp: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_csp_label,  // Added 24 May 2019
            internet_nl_web_appsecpriv_referrer_policy: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_referrer_policy_label,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_content_type_options: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_x_content_type_label,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_frame_options: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_x_frame_label,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_xss_protection: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_x_xss_label,  // Added 24 May 2019

            internet_nl_web_https_cert_domain: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_hostmatch_label,
            internet_nl_web_https_http_redirect: internet_nl_messages.nl.internet_nl.detail_web_tls_https_forced_label,
            internet_nl_web_https_cert_chain: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_trust_label,
            internet_nl_web_https_tls_version: internet_nl_messages.nl.internet_nl.detail_web_tls_version_label,
            internet_nl_web_https_tls_clientreneg: internet_nl_messages.nl.internet_nl.detail_web_tls_renegotiation_client_label,
            internet_nl_web_https_tls_ciphers: internet_nl_messages.nl.internet_nl.detail_web_tls_ciphers_label,
            internet_nl_web_https_http_available: internet_nl_messages.nl.internet_nl.detail_web_tls_https_exists_label,
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

            internet_nl_web_appsecpriv_csp_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_csp_verdict_good,  // Added 24 May 2019
            internet_nl_web_appsecpriv_referrer_policy_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_referrer_policy_verdict_good,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_content_type_options_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_x_content_type_verdict_good,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_frame_options_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_x_frame_verdict_good,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_xss_protection_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_x_xss_verdict_good,  // Added 24 May 2019
            internet_nl_web_https_cert_domain_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_hostmatch_verdict_good,
            internet_nl_web_https_http_redirect_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_https_forced_verdict_good,
            internet_nl_web_https_cert_chain_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_trust_verdict_good,
            internet_nl_web_https_tls_version_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_version_verdict_good,
            internet_nl_web_https_tls_clientreneg_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_renegotiation_client_verdict_good,
            internet_nl_web_https_tls_ciphers_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_ciphers_verdict_good,
            internet_nl_web_https_http_available_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_https_exists_verdict_good,
            internet_nl_web_https_dane_exist_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_dane_exists_verdict_good,
            internet_nl_web_https_http_compress_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_http_compression_verdict_good,
            internet_nl_web_https_http_hsts_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_https_hsts_verdict_good,
            internet_nl_web_https_tls_secreneg_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_renegotiation_secure_verdict_good,
            internet_nl_web_https_dane_valid_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_dane_valid_verdict_good,
            internet_nl_web_https_cert_pubkey_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_pubkey_verdict_good,
            internet_nl_web_https_cert_sig_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_signature_verdict_good,
            internet_nl_web_https_tls_compress_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_compression_verdict_good,
            internet_nl_web_https_tls_keyexchange_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_tls_fs_params_verdict_good,
            internet_nl_web_dnssec_valid_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_dnssec_valid_verdict_good,
            internet_nl_web_dnssec_exist_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_dnssec_exists_verdict_good,
            internet_nl_web_ipv6_ws_similar_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_ipv6_web_ipv46_verdict_good,
            internet_nl_web_ipv6_ws_address_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_ipv6_web_aaaa_verdict_good,
            internet_nl_web_ipv6_ns_reach_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_reach_verdict_good,
            internet_nl_web_ipv6_ws_reach_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_ipv6_web_reach_verdict_good,
            internet_nl_web_ipv6_ns_address_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_aaaa_verdict_good,

            internet_nl_web_appsecpriv_csp_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_csp_verdict_bad,  // Added 24 May 2019
            internet_nl_web_appsecpriv_referrer_policy_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_referrer_policy_verdict_bad,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_content_type_options_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_x_content_type_verdict_bad,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_frame_options_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_x_frame_verdict_bad,  // Added 24 May 2019
            internet_nl_web_appsecpriv_x_xss_protection_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_appsecpriv_http_x_xss_verdict_bad,  // Added 24 May 2019
            internet_nl_web_https_cert_domain_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_hostmatch_verdict_bad,
            internet_nl_web_https_http_redirect_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_https_forced_verdict_bad,
            internet_nl_web_https_cert_chain_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_trust_verdict_bad,
            internet_nl_web_https_tls_version_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_version_verdict_bad,
            internet_nl_web_https_tls_clientreneg_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_renegotiation_client_verdict_bad,
            internet_nl_web_https_tls_ciphers_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_ciphers_verdict_bad,
            internet_nl_web_https_http_available_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_https_exists_verdict_bad,
            internet_nl_web_https_dane_exist_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_dane_exists_verdict_bad,
            internet_nl_web_https_http_compress_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_http_compression_verdict_bad,
            internet_nl_web_https_http_hsts_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_https_hsts_verdict_bad,
            internet_nl_web_https_tls_secreneg_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_renegotiation_secure_verdict_bad,
            internet_nl_web_https_dane_valid_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_dane_valid_verdict_bad,
            internet_nl_web_https_cert_pubkey_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_pubkey_verdict_bad,
            internet_nl_web_https_cert_sig_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_cert_signature_verdict_bad,
            internet_nl_web_https_tls_compress_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_compression_verdict_bad,
            internet_nl_web_https_tls_keyexchange_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_tls_fs_params_verdict_bad,
            internet_nl_web_dnssec_valid_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_dnssec_valid_verdict_bad,
            internet_nl_web_dnssec_exist_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_dnssec_exists_verdict_bad,
            internet_nl_web_ipv6_ws_similar_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_ipv6_web_ipv46_verdict_bad,
            internet_nl_web_ipv6_ws_address_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_ipv6_web_aaaa_verdict_bad,
            internet_nl_web_ipv6_ns_reach_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_reach_verdict_bad,
            internet_nl_web_ipv6_ws_reach_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_ipv6_web_reach_verdict_bad,
            internet_nl_web_ipv6_ns_address_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_aaaa_verdict_bad,

            // https://github.com/NLnetLabs/Internet.nl/blob/cece8255ac7f39bded137f67c94a10748970c3c7/checks/templates/mail-results.html
            internet_nl_mail_server_configured: 'Mail Server Configured (not in UI)',  // Added 24th of May 2019
            internet_nl_mail_servers_testable: 'Mail Server Testable (not in UI)',  // Added 24th of May 2019
            internet_nl_mail_starttls_dane_ta: 'Mail STARTTLS Dane TA (not in UI)',  // Added 24th of May 2019
            internet_nl_mail_non_sending_domain: 'Mail Non Sending Domain (not in UI)',  // Added 24th of May 2019
            internet_nl_mail_auth_dmarc_policy_only: 'Mail Auth DMARC Policy Only (not in UI)',   // Added 24th of May 2019
            internet_nl_mail_auth_dmarc_ext_destination: 'Mail Auth DMARC Ext Destination (not in UI)',  // Added 24th of May 2019

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
            internet_nl_mail_dnssec_mailto_exist: internet_nl_messages.en.internet_nl.detail_mail_dnssec_exists_label,
            internet_nl_mail_dnssec_mailto_valid: internet_nl_messages.en.internet_nl.detail_mail_dnssec_valid_label,
            internet_nl_mail_dnssec_mx_valid: internet_nl_messages.nl.internet_nl.detail_mail_dnssec_mx_valid_label,
            internet_nl_mail_dnssec_mx_exist: internet_nl_messages.nl.internet_nl.detail_mail_dnssec_mx_exists_label,
            internet_nl_mail_ipv6_mx_address: internet_nl_messages.nl.internet_nl.detail_mail_ipv6_mx_aaaa_label,
            internet_nl_mail_ipv6_mx_reach: internet_nl_messages.nl.internet_nl.detail_mail_ipv6_mx_reach_label,
            internet_nl_mail_ipv6_ns_reach: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_reach_label,
            internet_nl_mail_ipv6_ns_address: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_aaaa_label,

            //
            internet_nl_mail_starttls_cert_domain_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_cert_hostmatch_verdict_good,
            internet_nl_mail_starttls_tls_version_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_version_verdict_good,
            internet_nl_mail_starttls_cert_chain_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_cert_trust_verdict_good,
            internet_nl_mail_starttls_tls_available_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_starttls_exists_verdict_good,
            internet_nl_mail_starttls_tls_clientreneg_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_renegotiation_client_verdict_good,
            internet_nl_mail_starttls_tls_ciphers_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_ciphers_verdict_good,
            internet_nl_mail_starttls_dane_valid_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_dane_valid_verdict_good,
            internet_nl_mail_starttls_dane_exist_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_dane_exists_verdict_good,
            internet_nl_mail_starttls_tls_secreneg_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_renegotiation_secure_verdict_good,
            internet_nl_mail_starttls_dane_rollover_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_dane_rollover_verdict_good,
            internet_nl_mail_starttls_cert_pubkey_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_cert_pubkey_verdict_good,
            internet_nl_mail_starttls_cert_sig_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_cert_signature_verdict_good,
            internet_nl_mail_starttls_tls_compress_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_compression_verdict_good,
            internet_nl_mail_starttls_tls_keyexchange_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_tls_fs_params_verdict_good,
            internet_nl_mail_auth_dmarc_policy_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_auth_dmarc_policy_verdict_good,
            internet_nl_mail_auth_dmarc_exist_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_auth_dmarc_verdict_good,
            internet_nl_mail_auth_spf_policy_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_auth_spf_policy_verdict_good,
            internet_nl_mail_auth_dkim_exist_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_auth_dkim_verdict_good,
            internet_nl_mail_auth_spf_exist_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_auth_spf_verdict_good,
            internet_nl_mail_dnssec_mailto_exist_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_dnssec_exists_verdict_good,
            internet_nl_mail_dnssec_mailto_valid_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_dnssec_valid_verdict_good,
            internet_nl_mail_dnssec_mx_valid_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_dnssec_mx_valid_verdict_good,
            internet_nl_mail_dnssec_mx_exist_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_dnssec_mx_exists_verdict_good,
            internet_nl_mail_ipv6_mx_address_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_ipv6_mx_aaaa_verdict_good,
            internet_nl_mail_ipv6_mx_reach_verdict_good: internet_nl_messages.nl.internet_nl.detail_mail_ipv6_mx_reach_verdict_good,
            internet_nl_mail_ipv6_ns_reach_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_reach_verdict_good,
            internet_nl_mail_ipv6_ns_address_verdict_good: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_aaaa_verdict_good,

            //
            internet_nl_mail_starttls_cert_domain_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_cert_hostmatch_verdict_bad,
            internet_nl_mail_starttls_tls_version_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_version_verdict_bad,
            internet_nl_mail_starttls_cert_chain_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_cert_trust_verdict_bad,
            internet_nl_mail_starttls_tls_available_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_starttls_exists_verdict_bad,
            internet_nl_mail_starttls_tls_clientreneg_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_renegotiation_client_verdict_bad,
            internet_nl_mail_starttls_tls_ciphers_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_ciphers_verdict_bad,
            internet_nl_mail_starttls_dane_valid_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_dane_valid_verdict_bad,
            internet_nl_mail_starttls_dane_exist_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_dane_exists_verdict_bad,
            internet_nl_mail_starttls_tls_secreneg_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_renegotiation_secure_verdict_bad,
            internet_nl_mail_starttls_dane_rollover_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_dane_rollover_verdict_bad,
            internet_nl_mail_starttls_cert_pubkey_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_cert_pubkey_verdict_bad,
            internet_nl_mail_starttls_cert_sig_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_cert_signature_verdict_bad,
            internet_nl_mail_starttls_tls_compress_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_compression_verdict_bad,
            internet_nl_mail_starttls_tls_keyexchange_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_tls_fs_params_verdict_bad,
            internet_nl_mail_auth_dmarc_policy_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_auth_dmarc_policy_verdict_bad,
            internet_nl_mail_auth_dmarc_exist_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_auth_dmarc_verdict_bad,
            internet_nl_mail_auth_spf_policy_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_auth_spf_policy_verdict_bad,
            internet_nl_mail_auth_dkim_exist_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_auth_dkim_verdict_bad,
            internet_nl_mail_auth_spf_exist_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_auth_spf_verdict_bad,
            internet_nl_mail_dnssec_mailto_exist_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_dnssec_exists_verdict_bad,
            internet_nl_mail_dnssec_mailto_valid_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_dnssec_valid_verdict_bad,
            internet_nl_mail_dnssec_mx_valid_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_dnssec_mx_valid_verdict_bad,
            internet_nl_mail_dnssec_mx_exist_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_dnssec_mx_exists_verdict_bad,
            internet_nl_mail_ipv6_mx_address_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_ipv6_mx_aaaa_verdict_bad,
            internet_nl_mail_ipv6_mx_reach_verdict_bad: internet_nl_messages.nl.internet_nl.detail_mail_ipv6_mx_reach_verdict_bad,
            internet_nl_mail_ipv6_ns_reach_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_reach_verdict_bad,
            internet_nl_mail_ipv6_ns_address_verdict_bad: internet_nl_messages.nl.internet_nl.detail_web_mail_ipv6_ns_aaaa_verdict_bad,
        },
        scan_monitor: {
            title: 'Scan monitor',
            intro: 'Alle scans die zijn uitgevoerd voor dit account staan hier. Het geeft een overzicht in hoe recent ' +
                'de data is. Het geeft ook inzicht in of de meest recente scan al is afgerond.',
            id: 'scan #',
            type: 'Soort',
            list: 'Lijst',
            started_on: 'Gestart',
            finished_on: 'Klaar',
            message: 'Status',
            live: 'API',
            no_scans: 'Nog geen scans uitgevoerd.',
            report: 'Rapport',
            runtime: 'Looptijd',
            open_in_api: 'Open internet.nl API resultaat',
            open_report: 'Open rapport',
            last_check: 'Laatste status update',
            report_is_being_generated: 'Report wordt gemaakt.',
            processing_results: 'Resultaten worden verwerkt.',
        },
        auto_refresh: {
            refresh_happening_in: 'Lijst wordt ververst over:',
            units: 's',
            refresh_now: 'ververs nu'
        },

    },
};