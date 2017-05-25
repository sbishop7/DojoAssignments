# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class BookManager(models.Manager):
    def validate_username(self, postData):
        print postData
        errors = []
        if len(postData['username']) < 8:
            errors.append("Username is not valid!")
        if len(postData['username']) >= 16:
            errors.append("Username is not valid!")
        if self.filter(username=postData['username']):
            print "Found duplicate"
            errors.append("Username already exists!")
        response_to_views = {}

        if errors:
            #failed validation
            response_to_views['status'] = False
            response_to_views['errors'] = errors
            #send message to views
        else:
            #passed validation
            #create the username
            user = self.create(username = postData['username'])
            response_to_views['status'] = True
            response_to_views['username'] = user

        return response_to_views

class Username(models.Model):
    username = models.CharField(max_length=16)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = BookManager()

