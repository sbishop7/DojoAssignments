# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-23 18:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='description',
            field=models.TextField(max_length=1000),
        ),
    ]