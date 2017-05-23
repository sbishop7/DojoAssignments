# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

def index(request):
    return render(request, 'display/index.html')

def display(request, number):
    request.session['image'] = "images/forest.jpg"
    if int(number) in range(1,11):
        request.session['image'] = "images/snow.jpg"
    elif int(number) in range(11,21):
        request.session['image'] = "images/desert.jpg"
    elif int(number) in range(21,31):
        request.session['image'] = "images/forest.jpg"
    elif int(number) in range(31,41):
        request.session['image'] = "images/vineyard.jpg"
    elif int(number) in range(41,51):
        request.session['image'] = "images/tropic.jpg"
    else:
        return redirect('/')
    return render(request, 'display/display.html')