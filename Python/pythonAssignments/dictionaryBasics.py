aboutMe = {
    "name": "Seth",
    "age": 42,
    "birthNation": "The United States",
    "favoriteLanguage": "Python"
}


def aboutPerson(x):
    print "My name is " + x["name"]
    print "My age is " + str(x["age"])
    print "My country of birth is " + x["birthNation"]
    print "My favorite language is " + x["favoriteLanguage"]

aboutPerson(aboutMe)