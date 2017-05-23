# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
import datetime
# from django.utils.timezone import localtime, now


def index(request):
    context = {
        "date": datetime.datetime.now().date(),
        "time": datetime.datetime.now().time()
    }
    return render(request, 'time_display/index.html', context)