# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import datetime

class TaskManager(models.Manager):
    def add_task(self, postData):
        errors = []
        response = {}
        today = str(datetime.date.today())

        if len(postData['task']) == 0:
            errors.append("Tasks field cannot be empty")
        if len(postData['date']) == 0:
            errors.append("Date field cannot be empty")
        if len(postData['time']) == 0:
            errors.append("Time field cannot be empty")
        if str(postData['date']) < today:
            errors.append("Date cannot be in the past")

        
        if errors:
            response['status'] = False
            response['errors'] = errors
        else: 
            response['status'] = True
            self.create(task=postData['task'], status="Pending", apt_time=postData['time'], apt_date=postData['date'])
        return response


    def update_task(self, postData, id):
        errors = []
        response = {}
        today = str(datetime.date.today())
        # current_task = self.get(id=id)
        
        if len(postData['task']) == 0:
            errors.append("Tasks field cannot be empty")
        if len(postData['date']) == 0:
            errors.append("Date field cannot be empty")
        if len(postData['time']) == 0:
            errors.append("Time field cannot be empty")
        if str(postData['date']) < today:
            errors.append("Date cannot be in the past")

        
        if errors:
            response['status'] = False
            response['errors'] = errors
        else: 
            response['status'] = True
            self.filter(id=id).update(task=postData['task'], status=postData['status'], apt_time=postData['time'], apt_date=postData['date'])
        return response

        
        

class Task(models.Model):
    task = models.CharField(max_length=100)
    status = models.CharField(max_length=20)
    apt_time = models.TimeField(auto_now=False)
    apt_date = models.DateField(auto_now=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = TaskManager()
