from flask import Flask, render_template, request, redirect, flash, session

app = Flask(__name__)

app.secret_key="piuq3bg[i"

@app.route('/')

def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])

def result():
    print len(request.form['name'])
    if len(request.form['name']) < 1:
        flash("Name field cannot be blank")
        return redirect('/')
    if len(request.form['comments']) < 1:
        flash("Comment field cannot be blank")
        return redirect('/')
    if len(request.form['comments']) > 120:
        flash("Comment field is too long")
        return redirect('/')
    else:
        name = request.form['name']
        location = request.form['location']
        language = request.form['language']
        comment = request.form['comments']
    return render_template('result.html', name=name, location=location, language=language, comment=comment)

app.run(debug=True)