from flask import Flask

app = Flask(__name__)

@app.route('/')

def root():
    return 'Welcome to my portfolio!  My name is Seth'

@app.route('/projects')

def projects():
    return 'My Projects:<ul><li>Danger Zones</li><li>Fat Unicorn: The Poopening</li><li>My Cohort</li><li>Certify Me</li><li>Woof Woof Go!</li></ul>'


@app.route('/about')

def aboutMe():
    # return 'hello'
    return 'I am a Python web developer and love going to hackathons in my spare time.  I love making things and meeting new people!  People might be surprised to learn that I own a horse and used to be a horse trainer!  (none of this is actuallytrue)'

app.run(debug=True)