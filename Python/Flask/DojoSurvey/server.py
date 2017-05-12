from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')

def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])

def result():
    print 'Got info'
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comments']
    return render_template('result.html', name=name, location=location, language=language, comment=comment)    
    
# @app.route('/results')

# def results():
#     return render_template('results.html')

app.run(debug=True)