# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
# from apps.product_app.models import Products

def index(request):
    print ("*"*50)
    for item in Products:
        print item.name
    print ("*"*50)
    return render(request, 'product_app/index.html')