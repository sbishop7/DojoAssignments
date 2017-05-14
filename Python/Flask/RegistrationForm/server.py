from flask import Flask, render_template, request, redirect, flash, session

import datetime
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)

app.secret_key="piusdafgbg[i"

@app.route('/')

def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])

def register():
    fail = 0
    if len(request.form['fname']) == 0:
        flash("Please enter your first name!", "error")
        fail += 1
    if str.isalpha(str(request.form['fname'])):
        pass
    else:
        flash("Your first name must contain only letters", "error")
        fail += 1
    if len(request.form['lname']) == 0:
        flash("Please enter your last name!", "error")
        fail += 1
    if str.isalpha(str(request.form['lname'])):
        pass
    else:
        flash("Your last name must contain only letters", "error")
        fail += 1
    if len(str(request.form['birth'])) == 0:
        flash("You must enter your birthday", "error")
        fail += 1
    elif request.form['birth'] > str(datetime.date.today()):
        flash("Your birthdate must be in the past", "error")
        fail += 1
    if len(request.form['email']) == 0:
        flash("Please enter your email address!", "error")
        fail += 1
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!", "error")
        fail += 1
    if len(request.form['password']) < 8:
        flash("Passwords must be at least 8 characters long.", "error")
        fail += 1
    if str.isalpha(str(request.form['password'])):
        flash("Passwords must contain at least one number", "error")
        fail += 1
    if str.isdigit(str(request.form['password'])):
        flash("Passwords must contain at least one letter", "error")
        fail += 1
    if str.islower(str(request.form['password'])):
        flash("Passwords must contain at least capitalized character", "error")
        fail += 1
    if request.form['password'] != request.form['confirm_pw']:
        flash("Passwords do not match!", "error")
        fail += 1
    if fail == 0:
        flash("Thanks for submitting your information.", "success")
    return redirect('/')

app.run(debug=True)