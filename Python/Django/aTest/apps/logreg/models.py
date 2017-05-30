# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import datetime
import re
import bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def validate_registration(self, postData):
        errors = []
        if len(postData['first_name']) < 2:
            errors.append('First Name is too short!')
        if not postData['first_name'].isalpha():
            errors.append('First Name must contain only letters')
        if len(postData['last_name']) < 2:
            errors.append('Last Name is too short!')
        if not postData['last_name'].isalpha():
            errors.append('Last Name must contain only letters')
        if not EMAIL_REGEX.match(postData['email']):
            errors.append('Email must be valid')
        if len(postData['password']) < 8:
            errors.append('Password must be at least 8 characters long')
        if postData['password'] != postData['password_confirmation']:
            errors.append('Passwords must match')
        if self.filter(email = postData['email']):
            errors.append('email is already registered')

        response_to_views = {}

        if errors:
            response_to_views['status'] = False
            response_to_views['errors'] = errors
        else:
            hashed_pw = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())

            new_user = self.create(first_name = postData['first_name'], last_name = postData['last_name'], email = postData['email'], password = hashed_pw)
            response_to_views['status'] = True
            response_to_views['user'] = new_user
            response_to_views['message'] = 'Successfully registered!'

        return response_to_views


    def validate_login(self, postData):
        errors = []
        response_to_views = {}
        hashed = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())
        try:
            user = self.get(email = postData['email'])
            if bcrypt.hashpw(postData['password'].encode(), user.password.encode()) == user.password:
                response_to_views['status'] = True
                response_to_views['user'] = user
                response_to_views['message'] = 'Successfully logged in!'
            else:
                errors.append('Email or Password does not match')
                response_to_views['status'] = False
                response_to_views['errors'] = errors
        except:
            errors.append('Email or Password does not match')
            response_to_views['status'] = False
            response_to_views['errors'] = errors

        return response_to_views


class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()