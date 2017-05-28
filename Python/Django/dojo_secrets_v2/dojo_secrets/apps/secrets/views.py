# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, reverse
from ..logreg.models import User
from .models import Secret
from django.db.models import Count
import datetime

def secrets(request):
    if 'user_id' in request.session:
        context={
            "user": User.objects.get(id=request.session['user_id']),
            "secrets": Secret.objects.all().annotate(total_likes=Count('likes')).order_by('-created_at')[:5]
        }
            # .annotate(age=(datetime.datetime.now()-'created_at'))

        return render(request,'secrets/secrets.html', context)
    else:
        return redirect( reverse( "logreg:index" ) ) 

def process(request):
    if request.method == 'POST':
        user = User.objects.get(id=request.session['user_id'])
        new_secret = Secret.objects.create(secret = request.POST['secret'], author=user)
    return redirect('secrets:secrets')

def popular(request):
    if 'user_id' in request.session:
        context={
            "user": User.objects.get(id=request.session['user_id']),
            "secrets": Secret.objects.all().annotate(total_likes=Count('likes')).order_by('-total_likes', '-created_at')
        }
        return render(request, 'secrets/popular.html', context)
    else: 
        return redirect( reverse( "login:index" ) ) 

def delete_secret(request, id, return_to):
    Secret.objects.get(id=id).delete()
    return_html = 'secrets:' + return_to
    return redirect( reverse(return_html))

def like(request, id, return_to):
    return_html = 'secrets:' + return_to
    Secret.objects.add_like(id, request.session['user_id'])
    return redirect( reverse(return_html))
    
    
    
