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
            "secrets": Secret.objects.all().annotate(total_likes=Count('likes')).order_by('-created_at')[:10]
        }
            # .annotate(age=(datetime.datetime.now()-'created_at'))

        return render(request,'secrets/secrets.html', context)
    else:
        return redirect( reverse( "logreg:index" ) ) 

def process(request):
    if request.method == 'POST':
        user = User.objects.get(id=request.session['user_id'])
        new_secret = Secret.objects.create(secret = request.POST['secret'], author=user)
        

        print ('*'*50)
        # print new_secret
        print new_secret
        print ('*'*50)

    return redirect('secrets:secrets')

def popular(request):
    if 'user_id' in request.session:
        context={
            "user": User.objects.get(id=request.session['user_id']),
            "secrets": Secret.objects.all().annotate(total_likes=Count('likes')).order_by('created_at')
        }
        return render(request, 'secrets/popular.html', context)
    else: 
        return redirect( reverse( "login:index" ) ) 

def delete_secret(request, id):
    Secret.objects.get(id=id).delete()
    # print ('*'*50)
    # # print new_secret
    # print id
    # print ('*'*50)
    return redirect( reverse( "secrets:secrets" ) )

def like(request, id):
    Secret.objects.get(id=id).update(likes=request.session['user_id'])
    return redirect( reverse('secrets:secrets'))
    
    
    
