# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Client(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=45)
    phone = models.CharField(max_length=12)
    notes = models.TextField(max_length=1000)
    