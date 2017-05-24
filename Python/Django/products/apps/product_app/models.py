# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Products(models.Model):
    name = models.CharField(max_length=45)
    description = models.TextField(max_length=1000)
    weight = models.DecimalField(max_digits=10, decimal_places=2)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    cost = models.DecimalField(max_digits=10, decimal_places=2) #to seller
    category = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)