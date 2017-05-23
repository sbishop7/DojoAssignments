# -*- coding: utf-8 -*-
# from __future__ import unicode_literals

from django.shortcuts import render, redirect

import string
import random

def index(request):
    # return render(request, 'word_app/index.html')
    try:
        if request.session['attempt'] > 0:
            pass
    except: 
        request.session['attempt'] = 0
    print ('*'*50)
    print request.session['attempt']
    print ('*'*50)
    return render(request, 'word_app/index.html')

def random_generator(size=14, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for x in range(size))

def generate(request):
    print ('*'*50)
    print request.POST
    print request.method
    print ('*'*50)
    request.session['attempt'] += 1
    request.session['random_word'] = random_generator()
    return redirect('/')
