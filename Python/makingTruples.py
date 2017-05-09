def makeListOfTruples(x):
    myList = []
    for key, value in x.iteritems():
            myList.append((key, value))
    return myList

my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

print makeListOfTruples(my_dict)