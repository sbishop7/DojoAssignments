# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

def secrets(request):
    return render(request,'secrets/secrets.html')
