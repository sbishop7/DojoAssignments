# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import datetime
from ..logreg.models import User

# Create your models here.
class Secret(models.Model):
    secret = models.TextField(max_length=1000)
    author = models.ForeignKey(User, related_name="secrets")
    likes = models.ManyToManyField(User, related_name="user_likes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

