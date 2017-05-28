from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.secrets, name='secrets'),
    url(r'^process$', views.process, name='process'),
    url(r'^popular$', views.popular, name='popular'),
    url(r'^delete_secret/(?P<id>\d+)/(?P<return_to>\w+)$', views.delete_secret, name='delete_secret'),
    url(r'^like/(?P<id>\d+)/(?P<return_to>\w+)$', views.like, name='like'),
]