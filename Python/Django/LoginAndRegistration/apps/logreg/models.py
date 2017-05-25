# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import datetime
import re

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
        if len(postData['email']) < 8:
            errors.append('Email must be at least 8 characters long')
        if postData['password'] != postData['password_confirmation']:
            errors.append('Passwords must match')
        if self.filter(email = postData['email']):
            errors.append('email is already registered')

        response_to_views = {}

        if errors:
            response_to_views['status'] = False
            response_to_views['errors'] = errors
        else:
            new_user = self.create(first_name = postData['first_name'], last_name = postData['last_name'], email = postData['email'], password = postData['password'])
            response_to_views['status'] = True
            response_to_views['user'] = new_user
            response_to_views['message'] = 'Successfully registered!'

        return response_to_views


    def validate_login(self, postData):
        errors = []

        if self.filter(email = postData['email']).filter(password=postData['password']):
            user = self.get(email = postData['email'])
        else:
            errors.append('Email or Password does not match')

        response_to_views = {}

        if errors:
            response_to_views['status'] = False
            response_to_views['errors'] = errors
        else:
            response_to_views['status'] = True
            response_to_views['email'] = postData['email']
            response_to_views['user'] = user
            response_to_views['name'] = 'Some Name'
            response_to_views['message'] = 'Successfully logged in!'

        return response_to_views


class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()