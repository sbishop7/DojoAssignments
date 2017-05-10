def coinToss():
    import random
    heads = 0
    tails = 0
    myString = ""
    print "Starting the program..."
    for count in range(1,5001):
        myString = "Attempt #" + str(count) + ": Throwing a coin...  It's a "
        toss = round(random.random())
        if toss == 0:
            myString +=  "head"
            heads += 1
        else:
            myString += "tail"
            tails += 1
        myString += "! ... Got " + str(heads) + " head(s) so far and " + str(tails) + " tail(s) so far"
        print myString
    print "Ending the program, thank you!"


coinToss()
