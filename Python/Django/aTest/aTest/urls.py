from django.conf.urls import url, include
# from django.contrib import admin

urlpatterns = [
    url(r'^', include('apps.logreg.urls', namespace="logreg")),
    url(r'^test_app', include('apps.test_app.urls', namespace="test_app"))
]
