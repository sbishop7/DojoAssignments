# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, reverse, redirect
from ..logreg.models import User
from .models import Author, Book, Review
from django.db.models import Count

def index(request):
    if 'user_id' in request.session:
        context = {
            'user': User.objects.get(id=request.session['user_id']),
            'books': Book.objects.all(),
            'recent_reviews': Review.objects.all().order_by('-created_at')[:3]
        }
        return render(request, 'books/index.html', context)
    else:
        return redirect( reverse( "logreg:index" ) ) 

def logout(request):
    del request.session['user_id']
    return redirect( "logreg:index" )

def add(request):
    if 'user_id' in request.session:
        context = {
            "authors": Author.objects.all().order_by('name')
        }
        return render(request, 'books/add.html', context)
    else:
        return redirect( reverse( "logreg:index" ) )

def create(request):
    if request.method == 'POST':
        # if request.POST['new_author']:
        #     author = Author.objects.add_author(request.POST)
        # else:
        #     author = request.POST['author']
        book = Book.objects.add_book(request.POST)
        print ('*'*50)
        print book
        print ('*'*50)
    else:
        print ('*'*50)
        print "no post"
        print ('*'*50)
    # print ('*'*50)
    # print request.post
    # print ('*'*50)
    return redirect( reverse( "books:index" ) )

def book(request, id):
    if 'user_id' in request.session:
        context = {
            'user': User.objects.get(id=request.session['user_id']),
            'book': Book.objects.get(id=id),
            'reviews': Review.objects.filter(book=id).order_by('-created_at')
        }
        print ('*'*50)
        print ('*'*50)
        return render(request, 'books/book.html', context)
    else:
        return redirect( reverse( "logreg:index" ) ) 

def add_review(request):
    if request.method == 'POST': 
        review = Review.objects.add_review(request.POST, request.POST['book'])

    return redirect( reverse( "books:index" ) )

def delete_review(request, id):
    # book = Book.objects.get(reviews=id)
    Review.objects.get(id=id).delete()
    # print ('*'*50)
    # print book.id
    # print ('*'*50)

    return redirect( reverse( "books:index" ))

def user(request, id):
    context = {
        "user": User.objects.get(id=id),
        "reviews": Review.objects.filter(reviewer_id=id)
    }
    return render(request, 'books/user.html', context)