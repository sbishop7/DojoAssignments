# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from ..clients.models import Client

class Project(models.Model):
    name = models.CharField(max_length=255)
    notes = models.TextField(max_length=1000)
    client = models.ForeignKey(Client, related_name="projects")
