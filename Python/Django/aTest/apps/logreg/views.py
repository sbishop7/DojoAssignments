# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages


def index(request):
    context ={
        "all_users": User.objects.all()
    }
    print "at logreg index"
    return render(request, 'logreg/index.html', context)

def register(request):
    if request.method == 'POST':
        response_from_models = User.objects.validate_registration(request.POST)

        if response_from_models['status']:
            request.session['user_id'] = response_from_models['user'].id
            return redirect('test_app:index')
        else:
            for error in response_from_models['errors']:
                messages.error(request, error)
            return redirect('logreg:index')

def login(request):
    if request.method == 'POST':
        response_from_models = User.objects.validate_login(request.POST)
        if response_from_models['status']:
            request.session['user_id'] = response_from_models['user'].id
            print ('*'*50)
            print "success"
            print ('*'*50)
            return redirect('test_app:index')
            
        else:
            for error in response_from_models['errors']:
                messages.error(request, error)
            print ('*'*50)
            print "failed"
            print ('*'*50)
    return redirect('logreg:index')
