# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages


def index(request):
    return render(request, 'logreg/index.html')

def success(request):
    current_user = User.objects.get(id=request.session['user_id'])
    context = {
        'name' : current_user.first_name,
        'message' : request.session['message']
    }
    return render(request, 'logreg/success.html', context)

def register(request):
    if request.method == 'POST':
        response_from_models = User.objects.validate_registration(request.POST)

    if response_from_models['status']:
        request.session['message'] = response_from_models['message']
        request.session['user_id'] = response_from_models['user'].id
        request.session['username'] = response_from_models['user'].first_name
        return redirect('logreg:success')
    else:
        for error in response_from_models['errors']:
            messages.error(request, error)
        return redirect('logreg:index')

def login(request):
    if request.method == 'POST':
        response_from_models = User.objects.validate_login(request.POST)
    if response_from_models['status']:
        request.session['message'] = response_from_models['message']
        request.session['user_id'] = response_from_models['user'].id
        request.session['username'] = response_from_models['user'].first_name
        return redirect('logreg:success')
    else:
        for error in response_from_models['errors']:
            messages.error(request, error)
    return redirect('logreg:index')
