from flask import Flask, redirect, request, session, render_template, flash
app = Flask(__name__)
from mysqlconnection import MySQLConnector
mysql = MySQLConnector(app, 'wall_db')
app.secret_key = 'this is top secret'
import md5 # imports the md5 module to generate a hash


import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    # validate the form input
    # store errors in list
    errors = []

    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    password_confirmation = request.form['password_confirmation']

    # complete the validations
    # 1. First Name - letters only, at least 2 characters and that it was submitted
    if not  first_name.isalpha():
        errors.append('First name field must be characters only!')
    if len(first_name) < 2:
        errors.append('First name field must be at least 2 characters long!')
    # 2. Last Name - letters only, at least 2 characters and that it was submitted
    if not  last_name.isalpha():
        errors.append('Last name field must be characters only!')
    if len(last_name) < 2:
        errors.append('Last name field must be at least 2 characters long!')
    # 3. Email - Valid Email format, and that it was submitted
    if not len(email):
        errors.append('Email field must be present!')
    if not EMAIL_REGEX.match(email):
        errors.append('Email must be valid')
    # 4. Password - at least 8 characters, and that it was submitted
    if len(password) < 8:
        errors.append('Password must be at least 8 characters long!')
    # 5. Password Confirmation - matches password
    if not password == password_confirmation:
        errors.append('Passwords must match!')

    # check for unique email address
    query = 'SELECT * FROM users WHERE email = :email'
    data = {
        'email':email
    }
    user = mysql.query_db(query, data)

    if user:
        errors.append('Email is already taken!')

    # check errors list
    if errors:
        # send errors back to client
        for error in errors:
            flash(error)
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

@app.route('/wall')
def wall():
    if not 'user_id' in session:
        return redirect('/')
    query = 'SELECT messages.id, messages.message, concat(users.first_name, " ", users.last_name) AS user, DATE_FORMAT(messages.created_at, "%M %D %Y") AS message_date FROM messages JOIN users ON messages.user_id = users.id ORDER BY messages.created_at DESC'
    messages = mysql.query_db(query)
    query2 = 'SELECT comments.comment, comments.message_id, DATE_FORMAT(comments.created_at, "%M %D %Y") AS comment_date, concat(users.first_name, " ", users.last_name) AS comment_user FROM comments JOIN users ON comments.user_id = users.id ORDER BY comments.created_at ASC'
    comments = mysql.query_db(query2)
    return render_template('wall.html', all_messages=messages, all_comments=comments)

@app.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return redirect('/')


@app.route('/login', methods=['POST'])
def login():
    # get a user from the DB
    query = 'SELECT * FROM users WHERE email = :email'
    data = {
        'email':request.form['email']
    }
    user = mysql.query_db(query, data)
    # if true
    if user:
        # continue with the login
        # check the passwords, make sure they match
        hashed_password = md5.new(request.form['password']).hexdigest()
        # if True
        if user[0]['password'] == hashed_password:
            # save user id in session
            session['user_id'] = user[0]['id']
            session['user_name'] = user[0]['first_name']
            # send to success page
            return redirect('/wall')
        else:
            # send message to client
            flash('Invalid email/ password combination!')
            # send to index page
            return redirect('/')

    else:
        flash("Email doesn't exist")
        # email does not exist
        # send message to client
        # send to index page
        return redirect('/')

@app.route('/message', methods=['POST'])
def message():
    query = "INSERT INTO messages (user_id, message, created_at, updated_at) VALUES (:user_id, :message, NOW(), NOW())"
    # query = "INSERT INTO messages (message, created_at, updated_at) VALUES (:message, NOW(), NOW())"
    # query = "INSERT INTO messages (user_id, created_at, updated_at) VALUES (:user_id NOW(), NOW())"
    data = {
        'user_id': session['user_id'],
        'message': request.form['message']
        }
    print query
    print data
    # Run query, with dictionary values injected into the query.
    mysql.query_db(query, data)
    return redirect('/wall')

@app.route('/comment', methods=['POST'])
def comment():
    query = "INSERT INTO comments (user_id, message_id, comment, created_at, updated_at) VALUES (:user_id, :message_id, :comment, NOW(), NOW())"
    # query = "INSERT INTO messages (message, created_at, updated_at) VALUES (:message, NOW(), NOW())"
    # query = "INSERT INTO messages (user_id, created_at, updated_at) VALUES (:user_id NOW(), NOW())"
    data = {
        'user_id': session['user_id'],
        'message_id': int(request.form['message_id']),
        'comment': request.form['comment']
        }
    print request.form['message_id']
    print query
    print data
    # Run query, with dictionary values injected into the query.
    mysql.query_db(query, data)
    return redirect('/wall')

app.run(debug = True)
