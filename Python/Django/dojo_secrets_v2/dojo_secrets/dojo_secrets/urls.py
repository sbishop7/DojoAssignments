from django.conf.urls import url, include
# from django.contrib import admin

urlpatterns = [
    url(r'^', include('apps.logreg.urls', namespace='logreg')),
    url(r'^secrets', include('apps.secrets.urls', namespace='secrets')),
]
