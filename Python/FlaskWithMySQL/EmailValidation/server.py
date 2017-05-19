from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import MySQLConnector
import datetime
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)

app.secret_key="piusdafgbg[i"

mysql = MySQLConnector(app,'email_db')

@app.route('/')

def index():
    query = "SELECT email, updated_at AS date_entered FROM emails"
    emails = mysql.query_db(query)
    return render_template('index.html', all_emails = emails)

@app.route('/validate', methods=['POST'])

def validate_email():
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Email is not valid!")
        return redirect('/')
    else:
        flash("The email address you entered (" + request.form['email'] + ") is a VALID email address!  Thank you!")
        query = "INSERT INTO emails (email, created_at, updated_at) VALUES (:email, NOW(), NOW())"
        # We'll then create a dictionary of data from the POST data received.
        data = {
                'email': request.form['email'],
            }
        # Run query, with dictionary values injected into the query.
        mysql.query_db(query, data)
        return redirect('/success')

@app.route('/success')

def success():
    # flash("The email address you entered (" + request.form['email'] + ") is a VALID email address!  Thank you!")
    query = "SELECT email, DATE_FORMAT(updated_at, '%c/%d/%Y %l:%i%p') AS date_entered FROM emails"
    emails = mysql.query_db(query)         
    return render_template('success.html', all_emails = emails)
    

app.run(debug=True)