from flask import Flask, render_template, redirect, request, session
import random

app=Flask(__name__)
app.secret_key="asdgpiub"

@app.route('/')

def index():
    try:
        if session['number']:
            pass
    except:
        session['number'] = random.randrange(0, 101)
        session['guessBox'] = "show"
        session['reset'] = "hidden"
    print session['number']
    return render_template('index.html')

@app.route('/guess', methods=['POST'])

def guess():
    if request.form['guess'] == "":
        session['guess'] = 0
    else: 
        session['guess'] = int(request.form['guess'])
    print session['guess']
    if session['guess'] < 1:
        print "please guess"
        session['guessAlert'] = "show"
        session['result'] ="Please enter a number between 1 and 100"
    elif session['guess'] > session['number']:
        print "too high"
        session['guessAlert'] = "show"
        session['result'] ="Too high!"
    elif session['guess'] < session['number']:
        print "too low"
        session['guessAlert'] = "show"
        session['result'] ="Too low!"
    elif session['guess'] == session['number']:
        print "Correct"
        session['guessAlert'] = "hidden"
        session['guessBox'] = "hidden"
        session.pop('result')
        session['reset'] = "show"
    return redirect('/')

@app.route('/reset', methods=['POST'])

def reset():
    session.pop('guess')
    session.pop('number')
    session['reset'] = "hidden"
    return redirect('/')

app.run(debug=True)