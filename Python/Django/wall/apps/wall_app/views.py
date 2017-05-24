# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse

import md5 # imports the md5 module to generate a hash

import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

def index(request):

    return render(request, 'wall_app/index.html')

def register(request):
    print ('*'*50)
    print "hello world"
    print ('*'*50)    
    request.session['errors'] = []

    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    email = request.POST['email']
    password = request.POST['password']
    password_confirmation = request.POST['password_confirmation']

    # complete the validations
    # 1. First Name - letters only, at least 2 characters and that it was submitted
    if not  first_name.isalpha():
        request.session['errors'].append('First name field must be characters only!')
    if len(first_name) < 2:
        request.session['errors'].append('First name field must be at least 2 characters long!')
    # 2. Last Name - letters only, at least 2 characters and that it was submitted
    if not  last_name.isalpha():
        request.session['errors'].append('Last name field must be characters only!')
    if len(last_name) < 2:
        request.session['errors'].append('Last name field must be at least 2 characters long!')
    # 3. Email - Valid Email format, and that it was submitted
    if not len(email):
        request.session['errors'].append('Email field must be present!')
    if not EMAIL_REGEX.match(email):
        request.session['errors'].append('Email must be valid')
    # 4. Password - at least 8 characters, and that it was submitted
    if len(password) < 8:
        request.session['errors'].append('Password must be at least 8 characters long!')
    # 5. Password Confirmation - matches password
    if not password == password_confirmation:
        request.session['errors'].append('Passwords must match!')

    # check for unique email address


    # check errors list
    if errors:
        # send errors back to client
        for error in errors:
            request.session['errors']
        return redirect('/')
    else:
        # save the user in db
        # encrypt the password we provided as 32 character string
        hashed_password = md5.new(password).hexdigest()

        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"

        data = {
            'first_name':first_name,
            'last_name':last_name,
            'email': email,
            'password': hashed_password
        }

        user = mysql.query_db(query, data)
        session['user_id'] = user
        session['user_name'] = user[0]['first_name'] + " " + user[0]['last_name']
        return redirect('/wall')

def wall(request):
    return HttpResponse("Welcome to the Wall")