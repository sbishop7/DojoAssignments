# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import datetime
from ..logreg.models import User

class SecretManager(models.Manager):
    def add_like(self, secret_id, liker_id):
        if len( User.objects.filter( user_likes__id = secret_id ).filter( id = liker_id ) ) == 0:
            self.get( id = secret_id ).likes.add( User.objects.get( id = liker_id ) )

# Create your models here.
class Secret(models.Model):
    secret = models.TextField(max_length=1000)
    author = models.ForeignKey(User, related_name="secrets")
    likes = models.ManyToManyField(User, related_name="user_likes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = SecretManager()