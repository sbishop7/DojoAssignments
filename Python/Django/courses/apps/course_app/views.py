# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Course

def index(request):
    context={"courses": Course.objects.all()}
    return render(request, 'course_app/index.html', context)

def create(request):
    Course.objects.create(name=request.POST['name'], description=request.POST['description'])
    return redirect('/')

def destroy(request, id):
    course = Course.objects.get(id=id)
    context = {"removing": course}
    request.session['id'] = id
    return render(request, 'course_app/destroy.html', context)

def cancel(request):
    return redirect('/')

def delete(request):
    Course.objects.filter(id=request.session['id']).delete()
    return redirect('/')