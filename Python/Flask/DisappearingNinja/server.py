from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')

def index():
    return render_template('index.html')

@app.route('/ninja')

def ninjas():
    ninjaPic = "images/tmnt.png"
    return render_template('ninja.html', ninjaImage=ninjaPic)

@app.route('/ninja/<color>')

def ninja(color):
    print color
    if color == "blue":
        ninjaPic = "images/leonardo.jpg"
    elif color == "orange":
        ninjaPic = "images/michelangelo.jpg"
    elif color == "purple":
        ninjaPic = "images/donatello.jpg"
    elif color == "red":
        ninjaPic = "images/raphael.jpg"
    else:
        ninjaPic = "images/notapril.jpg"
    return render_template('ninja.html', ninjaImage=ninjaPic)


app.run(debug=True)