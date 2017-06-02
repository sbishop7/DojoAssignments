from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^appointments$', views.index, name='index'),
    url(r'^logout$', views.logout, name="logout"),
    url(r'^create$', views.create, name="create"),
    url(r'^update/(?P<id>\d+)$', views.update, name="update"),
    url(r'^delete_task/(?P<id>\d+)$', views.delete_task, name='delete_task'),
    url(r'^update/update_task/(?P<id>\d+)$', views.update_task, name="update_task"),
]
