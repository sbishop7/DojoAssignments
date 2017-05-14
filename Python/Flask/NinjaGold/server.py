from flask import Flask, render_template, request, redirect, session, flash
import random
import datetime

app=Flask(__name__)
app.secret_key="poie4b"

@app.route('/')

def index():
    try: 
        if session['gold']:
            pass
    except:
        session['gold'] = 0
        session['activities'] = []
    print "Gold: ", session['gold']
    # session['gold'] = 0
    # session['activities'] = []
    return render_template('index.html')

@app.route('/process_money', methods=['POST'])

def process():
    print request.form['building']
    if request.form['building'] == "farm":
        change = random.randrange(10, 21)
    elif request.form['building'] == "cave":
        change = random.randrange(5,11)
    elif request.form['building'] == "house":
        change = random.randrange(2, 5)
    elif request.form['building'] == "casino":
        change = random.randrange(-50, 51)
    else:
        pass
    session['gold'] += change
    session['timestamp'] = datetime.datetime.now().strftime("%Y-%m-%d %I:%M %p")
    print "time: (", session['timestamp'], ")"
    if change < 0:
        session['activities'].insert(0, {"message":"Entered a casino and lost " + str(-change) + " golds...  Ouch.  (" + session['timestamp']+")", "color": "red"})
    else:
        session['activities'].insert(0, {"message":"Earned " + str(change) + " golds from the "+ request.form['building']+ "!  (" + session['timestamp']+")", "color": "green"})
    return redirect('/')

app.run(debug=True)