# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

def index(request):
    print ('*'*50)
    print "hello world"
    print ('*'*50)
    return render(request, 'survey/index.html')

def result(request):
    print ('*'*50)
    print "hello world part 2"
    print ('*'*50)
    return render(request, 'survey/result.html')

def process(request):
    print ('*'*50)
    print "Processing"
    print request.POST
    print request.method
    print request.POST['user_name']

    print ('*'*50)
    request.session['name'] = request.POST['user_name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['comments']
    return redirect('/result')

def go_back(request):
    return redirect('/')