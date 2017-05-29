# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from ..logreg.models import User

# Create your models here.
class AuthorManager(models.Manager):
    def add_author(self, postData):
        try:
            author = self.get(name = postData['new_author'])
        except:
            author = self.create(name = postData['new_author'])
        return author

class BookManager(models.Manager):
    def add_book(self, postData):
        
        if postData['new_author']:
            author = Author.objects.add_author(postData)
        else: 
            author = Author.objects.get(name = postData['author'])
        try:
            book = self.get(title = postData['title'], author=author)
        except:
            book = self.create(title = postData['title'], author=author)

        book_id = book.id

        Review.objects.add_review(postData, book_id)

        return book


class ReviewManager(models.Manager):
    def add_review(self, postData, book_id):
        
        user = User.objects.get(id=postData['user_id'])
        book = Book.objects.get(id=book_id)
        if postData['rating'] == '':
            rating = 0
        else:
            rating = postData['rating']
        review = self.create(reviewer=user, book=book, comment=postData['comment'], rating=rating)
        print ('*'*50)
        print rating
        print ('*'*50)
        return review

class Author(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = AuthorManager()

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name="wrote")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = BookManager()

class Review(models.Model):
    reviewer = models.ForeignKey(User, related_name="user_review")
    book = models.ForeignKey(Book, related_name="reviews")
    comment = models.TextField(max_length=1000)
    rating = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = ReviewManager()