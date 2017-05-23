# -*- coding: utf-8 -*-
# from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

def index(request):
    response="Hello World 2"
    return render(request, 'first_app/index.html')

def testimonials(request):
    return render(request, 'first_app/testimonials.html')