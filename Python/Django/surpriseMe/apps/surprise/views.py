# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

def index(request):
    return render(request, 'surprise/index.html')

def results(request):
    request.session['surprise_strings'] = ["Mitth'raw'nuruodo", "more commonly known as Thrawn", "was a Chiss male who served", "as an officer in the Imperial Navy", "holding the rank of Grand Admiral", "in the years prior to the Galactic Civil War.", "Thrawn hailed from the Unknown Regions", "and had knowledge of the uncharted region of the galaxy", "knowledge that Emperor Sheev Palpatine", "used due to his interest in discovering", "the secrets of the dark side of the Force", "that the Unknown Regions held.", "By 2 BBY", "the Emperor promoted Thrawn", "to Grand Admiral", "due to Thrawn's victory", "over a rebel insurgency at Batonn."]
    print ('*'*50)
    print request.POST['number']
    print ('*'*50)
    print len(request.session['surprise_strings'])
    request.session['display'] = []
    count = 0
    i = 0
    while  count < int(request.POST['number']):
        request.session['display'].append(request.session['surprise_strings'][i])
        if i <  len(request.session['surprise_strings']) - 1:
            i += 1
        else: 
            i = 0
        count += 1
    # print int(request.POST['number'])
    print request.session['display']
    return render(request, 'surprise/results.html')

# Create your views here.
