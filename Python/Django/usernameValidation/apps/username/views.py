# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Username
from django.contrib import messages

def index(request):
    return render(request, 'username/index.html')

def create(request):
    if request.method == 'POST':
        
        response_from_models = Username.objects.validate_username(request.POST)

        if response_from_models['status']:
        #     # passed the validation
        #     # save soemthign in session
        #     # redirect to a different page
            request.session['user'] = request.POST['username']
            user = request.POST['username']

            return redirect('username:success')
        else: 
        #     # send a message to the client
            for error in response_from_models['errors']:
                messages.error(request, error)
    return redirect('username:index')

def success(request):
    context={'usernames': Username.objects.all()}
    return render(request, 'username/success.html', context)

def remove(request, id):
    try: 
        del request.session['user']
    except: 
        pass
    current_user = Username.objects.filter(id=id)
    Username.objects.filter(id=id).delete()

    return redirect('username:success')