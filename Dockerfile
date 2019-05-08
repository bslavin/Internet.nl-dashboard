FROM python:3.6

RUN pip install poetry

COPY dashboard/ /source/dashboard/
COPY pyproject.toml poetry.lock README.md /source/

WORKDIR /source/
RUN poetry install -v --no-dev --develop dashboard

USER root

# configuration for django-uwsgi to work correct in Docker environment
ENV UWSGI_GID root
ENV UWSGI_UID root
ENV UWSGI_MODULE dashboard.wsgi
# serve static files (to caching proxy) from collected/generated static files
ENV UWSGI_STATIC_MAP /static=/srv/dashboard/static
# set proxy and browser caching for static files to 1 month
ENV UWSGI_STATIC_EXPIRES /* 2678400
ENV TOOLS_DIR /usr/local/bin/
ENV VENDOR_DIR /source/vendor/

# collect all static files form all django applications into static files directory
RUN /usr/local/bin/dashboard collectstatic

# Compress JS/CSS before serving, using django-compressor, run after collectstatic
# COMPRESS=1 is a hack to disable django_uwsgi app as it currently conflicts with compressor
# https://github.com/django-compressor/django-compressor/issues/881
RUN env COMPRESS=1 /usr/local/bin/dashboard compress

EXPOSE 8000

ENTRYPOINT [ "/usr/local/bin/dashboard" ]

CMD [ "dashboard_prdserver" ]
