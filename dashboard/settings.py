import os
from collections import OrderedDict
from datetime import timedelta
from typing import Dict, Tuple

import raven
import raven.contrib.celery
from django.utils.translation import gettext_lazy as _

__version__ = '0.0.0'

"""
Django settings for dashboard project.

Generated by 'django-admin startproject' using Django 2.1.7.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.1/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
# BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SETTINGS_PATH = os.path.normpath(os.path.dirname(__file__))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
# The routine validate_keys_are_changed is run in production and will prevent the default keys to be used.
SECRET_KEY: str = os.environ.get('SECRET_KEY', '_dzlo^9d#ox6!7c9rju@=u8+4^sprqocy3s*l*ejc2yr34@&98')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get('DEBUG', False)
if DEBUG:
    print('Django debugging is enabled.')

ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', 'localhost,127.0.0.1,::1').split(',')


# Application definition

INSTALLED_APPS = [
    # Constance
    'constance',
    'constance.backends.database',

    # Jet
    'jet.dashboard',
    'jet',
    'nested_admin',

    # Import Export
    'import_export',

    # Standard Django
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.humanize',

    # Periodic tasks
    'django_celery_beat',

    # Web Security Map (todo: minimize the subset)
    # The reason (model) why it's included is in the comments.
    'websecmap.app',  # Job
    'websecmap.organizations',  # Url
    'websecmap.scanners',  # Endpoint, EndpointGenericScan, UrlGenericScan
    'websecmap.reporting',  # Various reporting functions (might be not needed)
    'websecmap.map',  # because some scanners are intertwined with map configurations. That needs to go.
    'websecmap.pro',  # some model inlines

    # Custom Apps
    # These apps overwrite whatever is declared above, for example the user information.
    # Yet, it does not overwrite management commands.
    'dashboard.internet_nl_dashboard',

    # Two factor auth
    'django_otp',
    'django_otp.plugins.otp_static',
    'django_otp.plugins.otp_totp',
    'two_factor',

    # Javascript and CSS compression:
    'compressor',
]

try:
    # hack to disable django_uwsgi app as it currently conflicts with compressor
    # https://github.com/django-compressor/django-compressor/issues/881
    if not os.environ.get('COMPRESS', False):
        import django_uwsgi  # NOQA

        INSTALLED_APPS += ['django_uwsgi', ]
except ImportError:
    # only configure uwsgi app if installed (ie: production environment)
    pass

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    # Two factor Auth
    'django_otp.middleware.OTPMiddleware',
]

ROOT_URLCONF = 'dashboard.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            BASE_DIR + '/',
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'constance.context_processors.config',
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'dashboard.internet_nl_dashboard.context_processors.template_settings_processor',
            ],
        },
    },
]

WSGI_APPLICATION = 'dashboard.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASE_OPTIONS = {
    'mysql': {'init_command': "SET character_set_connection=utf8,"
                              "collation_connection=utf8_unicode_ci,"
                              "sql_mode='STRICT_ALL_TABLES';"},
}
DB_ENGINE = os.environ.get('DB_ENGINE', 'mysql')
DATABASE_ENGINES = {
    'mysql': 'dashboard.app.backends.mysql',
}
DATABASES_SETTINGS = {
    # persisten local database used during development (runserver)
    'dev': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.environ.get('DB_NAME', 'db.sqlite3'),
    },
    # sqlite memory database for running tests without
    'test': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.environ.get('DB_NAME', 'db.sqlite3'),
    },
    # for production get database settings from environment (eg: docker)
    'production': {
        'ENGINE': DATABASE_ENGINES.get(DB_ENGINE, 'django.db.backends.' + DB_ENGINE),
        'NAME': os.environ.get('DB_NAME', 'dashboard'),
        'USER': os.environ.get('DB_USER', 'dashboard'),
        'PASSWORD': os.environ.get('DB_PASSWORD', 'dashboard'),
        'HOST': os.environ.get('DB_HOST', 'mysql'),
        'OPTIONS': DATABASE_OPTIONS.get(os.environ.get('DB_ENGINE', 'mysql'), {})
    }
}
# allow database to be selected through environment variables
DATABASE = os.environ.get('DJANGO_DATABASE', 'dev')
DATABASES = {'default': DATABASES_SETTINGS[DATABASE]}


# Password validation
# https://docs.djangoproject.com/en/2.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

LOCALE_PATHS = ['locale']

LANGUAGE_COOKIE_NAME = 'dashboard_language'


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATIC_URL = '/static/'

# Absolute path to aggregate to and serve static file from.
if DEBUG:
    STATIC_ROOT = 'static'
else:
    STATIC_ROOT = os.environ.get('STATIC_ROOT', '/srv/dashboard/static/')  # noqa


MEDIA_ROOT = os.environ.get('MEDIA_ROOT', os.path.abspath(os.path.dirname(__file__)) + '/uploads/')
UPLOAD_ROOT: str = os.environ.get('MEDIA_ROOT', os.path.abspath(os.path.dirname(__file__)) + '/uploads/')


# Two factor auth
LOGIN_URL = "two_factor:login"
LOGIN_REDIRECT_URL = "/"
LOGOUT_REDIRECT_URL = LOGIN_URL
TWO_FACTOR_QR_FACTORY = 'qrcode.image.pil.PilImage'
# 6 supports google authenticator
TWO_FACTOR_TOTP_DIGITS = 6
TWO_FACTOR_PATCH_ADMIN = True


# Encrypted fields
# Note that this key is not stored in the database, that would be a security risk.
# The key can be generated with the following routine:
# https://cryptography.io/en/latest/fernet/
# from cryptography.fernet import Fernet
# Fernet.generate_key()
# Make sure you remove the b' and ' from the string, so you're working with a string.
# For example: b'JjvHNnFMfEaGd7Y0SAHBRNZYGGpNs7ydEp-ixmKSvkQ=' becomes
# JjvHNnFMfEaGd7Y0SAHBRNZYGGpNs7ydEp-ixmKSvkQ=
# Also note that on the production server a different key is required, otherwise the server will not start.
# See dashboard_prdserver for more details.
# The routine validate_keys_are_changed is run in production and will prevent the default keys to be used.
IMPORTED_FIELD_ENCRYPTION_KEY: str = os.environ.get('FIELD_ENCRYPTION_KEY',
                                                    "JjvHNnFMfEaGd7Y0SAHBRNZYGGpNs7ydEp-ixmKSvkQ=")

# The encryption key under ENV variables can only be stored as a string. This means we'll have to parse it to bytes.
FIELD_ENCRYPTION_KEY: bytes = IMPORTED_FIELD_ENCRYPTION_KEY.encode()


LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',  # sys.stdout
            'formatter': 'color',
        },
    },
    'formatters': {
        'debug': {
            'format': '%(asctime)s\t%(levelname)-8s - %(filename)-20s:%(lineno)-4s - '
                      '%(funcName)20s() - %(message)s',
        },
        'color': {
            '()': 'colorlog.ColoredFormatter',
            'format': '%(log_color)s%(asctime)s\t%(levelname)-8s - '
                      '%(message)s',
            'datefmt': '%Y-%m-%d %H:%M',
            'log_colors': {
                'DEBUG': 'green',
                'INFO': 'white',
                'WARNING': 'yellow',
                'ERROR': 'red',
                'CRITICAL': 'bold_red',
            },
        }
    },
    'loggers': {
        # Used when there is no log defined or loaded. Disabled given we always use __package__ to log.
        # Would you enable it, all logging messages will be logged twice.
        # '': {
        #     'handlers': ['console'],
        #     'level': os.getenv('DJANGO_LOG_LEVEL', 'DEBUG'),
        # },

        # Default Django logging, we expect django to work, and therefore only show INFO messages.
        # It can be smart to sometimes want to see what's going on here, but not all the time.
        # https://docs.djangoproject.com/en/2.1/topics/logging/#django-s-logging-extensions
        'django': {
            'handlers': ['console'],
            'level': os.getenv('DJANGO_LOG_LEVEL', 'INFO'),
        },

        # We expect to be able to debug websecmap all of the time.
        'dashboard': {
            'handlers': ['console'],
            'level': os.getenv('DJANGO_LOG_LEVEL', 'DEBUG'),
        },
        'websecmap': {
            'handlers': ['console'],
            'level': os.getenv('DJANGO_LOG_LEVEL', 'DEBUG'),
        },
        'test': {
            'handlers': ['console'],
            'level': os.getenv('DJANGO_LOG_LEVEL', 'DEBUG'),
        },
    },
}


# settings to get WebSecMap to work:
# Celery 4.0 settings
# Pickle can work, but you need to use certificates to communicate (to verify the right origin)
# It's preferable not to use pickle, yet it's overly convenient as the normal serializer can not
# even serialize dicts.
# http://docs.celeryproject.org/en/latest/userguide/configuration.html
CELERY_accept_content = ['pickle', 'yaml']
CELERY_task_serializer = 'pickle'
CELERY_result_serializer = 'pickle'


# Celery config
CELERY_BROKER_URL = os.environ.get('BROKER', 'redis://localhost:6379/0')
ENABLE_UTC = True

# Any data transfered with pickle needs to be over tls... you can inject arbitrary objects with
# this stuff... message signing makes it a bit better, not perfect as it peels the onion.
# this stuff... message signing makes it a bit better, not perfect as it peels the onion.
# see: https://blog.nelhage.com/2011/03/exploiting-pickle/
# Yet pickle is the only convenient way of transporting objects without having to lean in all kinds
# of directions to get the job done. Intermediate tables to store results could be an option.
CELERY_ACCEPT_CONTENT = ['pickle']
CELERY_TASK_SERIALIZER = 'pickle'
CELERY_RESULT_SERIALIZER = 'pickle'
CELERY_TIMEZONE = 'UTC'

CELERY_BEAT_SCHEDULER = 'django_celery_beat.schedulers:DatabaseScheduler'

CELERY_BROKER_CONNECTION_MAX_RETRIES = 1
CELERY_BROKER_CONNECTION_RETRY = False
CELERY_RESULT_EXPIRES = timedelta(hours=4)

# Use the value of 2 for celery prefetch multiplier. Previous was 1. The
# assumption is that 1 will block a worker thread until the current (rate
# limited) task is completed. When using 2 (or higher) the assumption is that
# celery will drop further rate limited task from the internal worker queue and
# fetch other tasks tasks that could be executed (spooling other rate limited
# tasks through in the process but to no hard except for a slight drop in
# overall throughput/performance). A to high value for the prefetch multiplier
# might result in high priority tasks not being picked up as Celery does not
# seem to do prioritisation in worker queues but only on the broker
# queues. The value of 2 is currently selected because it higher than 1,
# behaviour needs to be observed to decide if raising this results in
# further improvements without impacting the priority feature.
CELERY_WORKER_PREFETCH_MULTIPLIER = 2

# numer of tasks to be executed in parallel by celery
CELERY_WORKER_CONCURRENCY = 10

# Workers will scale up and scale down depending on the number of tasks
# available. To prevent workers from scaling down while still doing work,
# the ACKS_LATE setting is used. This insures that a task is removed from
# the task queue after the task is performed. This might result in some
# issues where tasks that don't finish or crash keep being executed:
# thus for tasks that are not programmed perfectly it will raise a number
# of repeated exceptions which will need to be debugged.
CELERY_ACKS_LATE = True

# Settings for statsd metrics collection. Statsd defaults over UDP port 8125.
# https://django-statsd.readthedocs.io/en/latest/#celery-signals-integration
STATSD_HOST = os.environ.get('STATSD_HOST', '127.0.0.1')
STATSD_PREFIX = 'dashboard'
# register hooks for selery tasks
STATSD_CELERY_SIGNALS = True
# send database query metric (in production, in development we have debug toolbar for this)
if not DEBUG:
    STATSD_PATCHES = ['django_statsd.patches.db', ]


TOOLS = {
    'organizations': {
        'import_data_dir': '',
    },
}

OUTPUT_DIR = os.environ.get('OUTPUT_DIR', os.path.abspath(os.path.dirname(__file__)) + '/')
VENDOR_DIR = os.environ.get('VENDOR_DIR', os.path.abspath(os.path.dirname(__file__) + '/../vendor/') + '/')

if DEBUG:
    # too many sql variables....
    DATA_UPLOAD_MAX_NUMBER_FIELDS = 10000


# Compression
# Django-compressor is used to compress css and js files in production
# During development this is disabled as it does not provide any feature there
# Django-compressor configuration defaults take care of this.
# https://django-compressor.readthedocs.io/en/latest/usage/
# which plugins to use to find static files
STATICFILES_FINDERS = (
    # default static files finders
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    # other finders..
    'compressor.finders.CompressorFinder',
)

COMPRESS_CSS_FILTERS = ['compressor.filters.cssmin.CSSCompressorFilter']

# Slimit doesn't work with vue. Tried two versions. Had to rewrite some other stuff.
# Now using the default, so not explicitly adding that to the settings
# COMPRESS_JS_FILTERS = ['compressor.filters.jsmin.JSMinFilter']

# Brotli compress storage gives some issues.
# This creates the original compressed and a gzipped compressed file.
COMPRESS_STORAGE = (
    'compressor.storage.GzipCompressorFileStorage'
)

# Enable static file (js/css) compression when not running debug
# https://django-compressor.readthedocs.io/en/latest/settings/#django.conf.settings.COMPRESS_OFFLINE
COMPRESS_OFFLINE = not DEBUG
# https://django-compressor.readthedocs.io/en/latest/settings/#django.conf.settings.COMPRESS_ENABLED
# Enabled when debug is off by default.

# Constance settings:
CONSTANCE_BACKEND = 'constance.backends.database.DatabaseBackend'

CONSTANCE_CONFIG = {
    'SCAN_AT_ALL': (
        True,
        'This quickly enables or disabled all scans. Note that scans in the scan queue will still be processed.', bool),
}

CONSTANCE_CONFIG_FIELDSETS: Dict[str, Tuple[str]] = OrderedDict()

# the try-except makes sure autofix doesn't move the import to the top of the file.
# Loaded here, otherwise: django.core.exceptions.AppRegistryNotReady: Apps aren't loaded yet.
try:
    from websecmap.scanners.constance import add_scanner_fields, add_scanner_fieldsets  # NOQA
    CONSTANCE_CONFIG = add_scanner_fields(CONSTANCE_CONFIG)
    CONSTANCE_CONFIG_FIELDSETS = add_scanner_fieldsets(CONSTANCE_CONFIG_FIELDSETS)
except ImportError:
    pass


JET_SIDE_MENU_ITEMS = [

    # {'label': _('🎛️ Configuration'), 'items': [
    #    # {'name': 'auth.group'},
    #    {'name': 'constance.config', 'label': _('Configuration')},
    # ]},

    {'label': _('📊 Dashboard'), 'items': [
        {'name': 'auth.user'},
        {'name': 'internet_nl_dashboard.account'},
        {'name': 'internet_nl_dashboard.uploadlog'},
        {'name': 'internet_nl_dashboard.urllist'},
        {'name': 'internet_nl_dashboard.accountinternetnlscan'},
        {'name': 'internet_nl_dashboard.urllistreport'}
    ]},

    {'label': _('🕒 Periodic Tasks'), 'items': [
        {'name': 'app.job'},
        {'name': 'django_celery_beat.periodictask'},
        {'name': 'django_celery_beat.crontabschedule'},
    ]},

    {'label': _('🔬 Scanning (generated)'), 'items': [
        {'name': 'organizations.url', 'label': 'Urls'},
        {'name': 'scanners.endpoint', 'label': 'Endpoints'},
        {'name': 'scanners.endpointgenericscan', 'label': 'Endpoint Scans'},
        {'name': 'scanners.internetnlscan', 'label': 'Internet.nl Scans Tasks'},
        {'name': 'reporting.urlreport', 'label': 'Url Reports'},
    ]},
]

# Allows to see all details of websecmap.
# Loaded here, otherwise: django.core.exceptions.AppRegistryNotReady: Apps aren't loaded yet.
# try:
#     from websecmap.jet import websecmap_menu_items  # NOQA
#     JET_SIDE_MENU_ITEMS += websecmap_menu_items()
# except ImportError:
#     pass

# Security options
if not DEBUG:
    SESSION_COOKIE_SECURE = True  # insecure by default
    SESSION_COOKIE_SAMESITE = 'Lax'
    SESSION_COOKIE_AGE = 1209600  # two weeks, could be longer
    CSRF_COOKIE_SECURE = True  # insecure by default

# if sentry DSN is provided register raven to emit events on exceptions
SENTRY_DSN = os.environ.get('SENTRY_DSN')
if SENTRY_DSN:
    INSTALLED_APPS += ('raven.contrib.django.raven_compat',)
    RAVEN_CONFIG = {
        'dsn': SENTRY_DSN,
        'release': __version__,
    }
    # add sentry ID to request for inclusion in templates
    # https://docs.sentry.io/clients/python/integrations/django/#message-references
    MIDDLEWARE.insert(0, 'raven.contrib.django.raven_compat.middleware.SentryResponseErrorIdMiddleware')

    # Celery specific handlers
    client = raven.Client(SENTRY_DSN)
    raven.contrib.celery.register_logger_signal(client)
    raven.contrib.celery.register_signal(client)


# Copied from internet.nl

# Supported languages.
# NOTE: Make sure that a DNS record for each language exists.
#       More information can be found in the README file.
LANGUAGES = sorted([
    ('nl', 'Dutch'),
    ('en', 'English'),
], key=lambda x: x[0])
