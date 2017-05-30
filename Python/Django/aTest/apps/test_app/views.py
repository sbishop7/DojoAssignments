# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
import datetime

def index(request):
    print "Made it to test App"
    context = {
        "time": datetime.datetime.now()
    }
    return render(request, 'test_app/index.html', context)