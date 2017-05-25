# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages


def index(request):
    return render(request, 'logreg/index.html')

def success(request):
    return render(request, 'logreg/success.html')

def register(request):
    if request.method == 'POST':
        response_from_models = User.objects.validate_registration(request.POST)

    if response_from_models['status']:
        request.session['message'] = response_from_models['message']
        request.session['name'] = response_from_models['name']
        return redirect('logreg:success')
    else:
        for error in response_from_models['errors']:
            messages.error(request, error)
        return redirect('logreg:index')

def login(request):
    if request.method == 'POST':
        response_from_models = User.objects.validate_login(request.POST)
        current_user = response_from_models['user']
    print ('*'*50)
    # for x in current_user:
    #     print x
    
    print ('*'*50)
    if response_from_models['status']:
        request.session['message'] = response_from_models['message']
        user = User.objects.get(email=request.POST['email'])
        print ('*'*50)
        print user['first_name']
        print ('*'*50)
        request.session['name'] = 'some name'
        # request.session['user'] = response_from_models['user']
        print ('*'*50)
        # print current_user['first_name']
        print ('*'*50)
        return redirect('logreg:success')
    else:
        for error in response_from_models['errors']:
            messages.error(request, error)
    return redirect('logreg:index')
