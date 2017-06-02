# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from ..logreg.models import User
from .models import Task
from django.contrib import messages
from django.db.models import Q
import datetime

from django.shortcuts import render, reverse, redirect

def index(request):
    if 'user_id' in request.session:
        today = datetime.date.today()
        context = {
            'user': User.objects.get(id=request.session['user_id']),
            'today': datetime.datetime.now(),
            'today_task': Task.objects.filter(apt_date=today),
            'future_tasks': Task.objects.filter(Q(apt_date__gt=datetime.date.today())),
        }
    return render(request, 'appointments/index.html', context)

def logout(request):
    del request.session['user_id']
    return redirect( "logreg:index" )

def create(request):
    if 'user_id' in request.session:
        if request.method == 'POST':
            # task_date = datetime.combine(request.POST['date'], request.Post['time'])
            response = Task.objects.add_task(request.POST)
            
            if response['status']:
                print('*'*50)
                print response
                print('*'*50)
            else:
                for error in response['errors']:
                    messages.error(request, error)
        return redirect( reverse ('appointments:index') )

    return redirect( reverse ('logreg:index') )

def update(request, id):
    if 'user_id' in request.session:
        task = Task.objects.get(id=id)
        time = str(task.apt_time)
        date = str(task.apt_date)
        print ('*'*50)
        print type(task.apt_time)
        print date
        print ('*'*50)
        context = {
            "task": Task.objects.get(id=id),
            "time": time,
            "date": date
        }
        return render(request, 'appointments/update.html', context)
    else:
        return redirect( reverse ('logreg:index') )

def delete_task(request, id):
    if 'user_id' in request.session:
        Task.objects.get(id=id).delete()
        return redirect( reverse('appointments:index') )
    else:
        return redirect( reverse( "logreg:index" ) )

def update_task(request, id):
    if 'user_id' in request.session:
        if request.method == 'POST':
            
            # task_date = datetime.combine(request.POST['date'], request.Post['time'])
            response = Task.objects.update_task(request.POST, id)
            
            if response['status']:
                print('*'*50)
                print response
                print('*'*50)
                return redirect( reverse ('appointments:index') )
            else:
                for error in response['errors']:
                    messages.error(request, error)
        return redirect( reverse ('appointments:update', kwargs={'id': id}) )
    else:
        return redirect( reverse( "logreg:index" ) )