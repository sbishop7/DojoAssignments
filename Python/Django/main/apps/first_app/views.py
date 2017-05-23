# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse
# the index function is called when root is visited
# def index(request):
    # response = "Hello, I am your first request!"
    # return HttpResponse(response)


# Create your views here.
def index(request):
    return render(request, 'vinmymvc/index.html')
def show(request):
	print request.method
	return render(request, 'vinmymvc/showusers.html')