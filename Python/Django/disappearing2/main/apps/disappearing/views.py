from django.shortcuts import render, redirect

def index(request):
    return render(request, "disappearing/index.html")

def group(request):
    context = {
    'url':"images/ninjaturtles.jpg"
    }
    return render(request, "disappearing/display.html", context)

def show(request, color):
    context = {
    'url':"images/ninjaturtles.jpg"
    }
    if color == "purple":
        context['url']= "images/donatelo.jpg"
    elif color == "blue":
        context['url']= "images/leonardo.jpg"
    elif color == "red":
        context['url']= "images/raphael.jpg"
    elif color == "orange":
        context['url']= "images/michaelangelo.jpg"
    else:
        context['url'] = "images/april.jpg"


    return render(request, "disappearing/display.html", context)

# Create your views here.
