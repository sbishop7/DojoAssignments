# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-30 00:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=45)),
                ('phone', models.CharField(max_length=12)),
                ('notes', models.TextField(max_length=1000)),
            ],
        ),
    ]
