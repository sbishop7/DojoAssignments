# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, reverse, redirect
from .models import Post

def index(request):
    context = {
        "posts": Post.objects.all()
    }
    return render(request, 'posts/index.html', context)

def create(request):
    if request.method == 'POST':
        Post.objects.create(post=request.POST['post'])
    return redirect( reverse ('posts:index') )
