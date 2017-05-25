from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^create$', views.create, name='create'),
    url(r'^success$', views.success, name='success'),
    url(r'^remove/(?P<id>\d+)$', views.remove, name="remove")
]
