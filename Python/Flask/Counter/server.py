from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key="posdfn"

@app.route('/')

def index():
    try:
        if session['count']:
            session['count'] += 1
    except:
        session['count'] = 1
    return render_template('index.html')

@app.route('/count', methods=['POST'])

def count():
    session['count'] += int(request.form['action'])
    print request.form['action']
    return redirect('/')

@app.route('/reset', methods=['POST'])

def reset():
    session.pop('count')
    return redirect('/')

app.run(debug=True)