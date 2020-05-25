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

        fields: {
            forum_standardistation: {
                category_label: 'Extra Fields',
                measurements_on_agreed_security_standards: 'Measurements on agreed security standards',
                ipv6_monitor: 'IPv6 monitor',
                status_fields: 'Status Fields',
            },
            additional_fields: {
                label: 'Additional fields',
            },
        },

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

        // New extra fields in API 2.0
        internet_nl_web_legacy_tls_1_3: 'TLS 1.3 Support',
        internet_nl_mail_legacy_mail_non_sending_domain: 'Non e-mail sending domain',
        internet_nl_mail_legacy_mail_server_testable: 'Mail server testable',
        internet_nl_mail_legacy_mail_server_reachable: 'Mail server reachable',
        internet_nl_mail_legacy_domain_has_mx: 'Mail server has MX record',
        internet_nl_mail_legacy_tls_1_3: 'TLS 1.3 Support',
        internet_nl_web_legacy_tls_1_3_explanation: 'Derives TLS1.3 support through the 0-RTT test. Explicitly testing for TLS1.3 support is not part of the compliance tool. However, TLS1.3 support could be derived from the 0-RTT test as the function is only available starting from TLS1.3. As there is no explicit TLS1.3 connection during testing, the test assumes that the server chose TLS1.3 when given the opportunity to do so.',
        internet_nl_mail_legacy_mail_non_sending_domain_explanation: 'Checks if the domain is configured for _not_ sending email. For this test this is translated as:\n' +
            '    SPF record with v=spf1 -all, and\n' +
            '    DMARC record with v=DMARC1;p=reject;.\n',
        internet_nl_mail_legacy_mail_server_testable_explanation: 'All mailservers communicated back and results are complete.',
        internet_nl_mail_legacy_mail_server_reachable_explanation: 'Network connectivity was possible with at least one mailserver.',
        internet_nl_mail_legacy_domain_has_mx_explanation: 'Mailservers are configured for the domain.',
        internet_nl_mail_legacy_tls_1_3_explanation: 'Derives TLS1.3 support through the 0-RTT test. Explicitly testing for TLS1.3 support is not part of the compliance tool. However, TLS1.3 support could be derived from the 0-RTT test as the function is only available starting from TLS1.3. As there is no explicit TLS1.3 connection during testing, the test assumes that the server chose TLS1.3 when given the opportunity to do so.',

        // https://github.com/NLnetLabs/Internet.nl/blob/cece8255ac7f39bded137f67c94a10748970c3c7/checks/templates/mail-results.html
        internet_nl_mail_server_configured: 'Mail Server Configured (not in UI)',  // Added 24th of May 2019
        internet_nl_mail_servers_testable: 'Mail Server Testable (not in UI)',  // Added 24th of May 2019
        internet_nl_mail_starttls_dane_ta: 'Mail STARTTLS Dane TA (not in UI)',  // Added 24th of May 2019
        internet_nl_mail_non_sending_domain: 'Mail Non Sending Domain (not in UI)',  // Added 24th of May 2019
        internet_nl_mail_auth_dmarc_policy_only: 'Mail Auth DMARC Policy Only (not in UI)',   // Added 24th of May 2019
        internet_nl_mail_auth_dmarc_ext_destination: 'Mail Auth DMARC Ext Destination (not in UI)',  // Added 24th of May 2019

        charts: {
            adoption_timeline: {
                title: 'Average internet.nl score over time.',
                yAxis_label: 'Average internet.nl score',
                xAxis_label: 'Date',
                average_internet_nl_score: "Average internet.nl score",
                accessibility_text: "A table with the content of this graph is shown below.",
            },
            adoption_bar_chart: {
                title_single: 'Average adoption of standards, %{list_information}, %{number_of_domains} domains.',
                title_multiple: 'Comparison of adoption of standards between %{number_of_reports} reports.',
                yAxis_label: 'Adoption',
                average: "Average",
                accessibility_text: "A table with the content of this graph is shown below.",
            },
            cumulative_adoption_bar_chart: {
                title: 'Average adoption of standards over %{number_of_reports} reports.',
                yAxis_label: 'Adoption',
                average: "Average",
                accessibility_text: "A table with the content of this graph is shown below.",
            }
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
            field_label_automated_scan_frequency: 'Periodic scanning frequency',
            automated_scan_frequency: {
                disabled: 'Do not scan periodically',
                every_half_year: 'At the start of every half year',
                every_quarter: 'At the start of every quarter',
                every_month: 'Every 1st day of the month',
                twice_per_month: 'Twice per month',
            },
        },

    },
    nl: {

        fields: {
            forum_standardistation: {
                category_label: 'Extra Velden',
                measurements_on_agreed_security_standards: 'Measurements on agreed security standards',
                ipv6_monitor: 'IPv6 monitor',
                status_fields: 'Status Velden'
            },
            additional_fields: {
                label: 'Additionele velden',
            },
        },

        charts: {
            adoption_timeline: {
                title: 'Adoptie van standaarden over tijd.',
                yAxis_label: 'Gemiddelde internet.nl score',
                xAxis_label: 'Datum',
                average_internet_nl_score: "Gemiddelde internet.nl score",
                accessibility_text: "Een tabel met de inhoud van deze grafiek wordt hieronder getoond.",
            },

            adoption_bar_chart: {
                title_single: 'Adoptie van standaarden, %{list_information}, %{number_of_domains} domeinen.',
                title_multiple: 'Vergelijking adoptie van standaarden tussen %{number_of_reports} rapporten.',
                yAxis_label: 'Adoptiegraad',
                average: "Gemiddeld",
                accessibility_text: "Een tabel met de inhoud van deze grafiek wordt hieronder getoond.",
            },
            cumulative_adoption_bar_chart: {
                title: 'Gemiddelde adoptie van standaarden van %{number_of_reports} rapporten.',
                yAxis_label: 'Adoptiegraad',
                average: "Gemiddeld",
                accessibility_text: "Een tabel met de inhoud van deze grafiek wordt hieronder getoond.",
            }
        },

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

        // https://github.com/NLnetLabs/Internet.nl/blob/cece8255ac7f39bded137f67c94a10748970c3c7/checks/templates/mail-results.html
        internet_nl_mail_server_configured: 'Mail Server Configured (not in UI)',  // Added 24th of May 2019
        internet_nl_mail_servers_testable: 'Mail Server Testable (not in UI)',  // Added 24th of May 2019
        internet_nl_mail_starttls_dane_ta: 'Mail STARTTLS Dane TA (not in UI)',  // Added 24th of May 2019
        internet_nl_mail_non_sending_domain: 'Mail Non Sending Domain (not in UI)',  // Added 24th of May 2019
        internet_nl_mail_auth_dmarc_policy_only: 'Mail Auth DMARC Policy Only (not in UI)',   // Added 24th of May 2019
        internet_nl_mail_auth_dmarc_ext_destination: 'Mail Auth DMARC Ext Destination (not in UI)',  // Added 24th of May 2019

        urllist: {
            field_label_id: 'id',
            field_label_name: 'Lijst naam',
            field_label_enable_scans: 'Scans uitvoeren',
            enable_scans_enabled: 'Ingeschakeld',
            enable_scans_disabled: 'Uitgeschakeld',
            field_label_scan_type: 'Welk type scan moet er worden uitgevoerd',
            scan_type_web: 'Website en webadres',
            scan_type_mail: 'E-Mail',
            field_label_automated_scan_frequency: 'Periodieke scanfrequente',
            automated_scan_frequency: {
                disabled: 'Niet periodiek scannen',
                every_half_year: 'Aan het begin van elk half jaar',
                every_quarter: 'Aan het begin van elk kwartaal',
                every_month: 'Aan het begin van elke maand',
                twice_per_month: 'Om de twee weken vanaf de 1e van de maand',
            },
        },

    },
};