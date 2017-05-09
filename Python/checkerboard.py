count = 0
while count < 4:
    print "* * * *"
    print " * * * *"
    count += 1


#below is a flexible version

def createCheckboard(x):
    count = 0
    while count < x:
        if count % 2 == 0:
            print "* * * *"
        else:
            print " * * * *"
        count += 1

print " "
print "Six count"
createCheckboard(6)

print " "
print "Seven count"
createCheckboard(7)
