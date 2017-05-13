from flask import Flask, render_template, redirect, request, session
import random

app=Flask(__name__)
app.secret_key="pouasdbfp"

@app.route('/')

def index():
    try:
        if not session['wins']:
            pass
    except:
        session['wins'] = 0
        session['loses'] = 0
        session['ties'] = 0

    return render_template('index.html')

@app.route('/result', methods=['POST'])

def result():
    player_choice = int(request.form['action'])
    # print request.form['action']
    computer_choice = random.randint(0,2)
    if computer_choice == player_choice:
        session['ties'] += 1
    elif computer_choice  == 2 and player_choice == 0:
        session['wins'] += 1
    elif computer_choice < player_choice:
        session['wins'] += 1
    else: 
        session['loses'] += 1

    # print session['wins'], session['loses'], session['ties']

    return redirect('/')

app.run(debug=True)

