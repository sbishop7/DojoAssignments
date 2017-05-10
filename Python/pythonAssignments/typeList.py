def testList(x):
    newString = ""
    total = 0
    itemType = type(x[0]).__name__
    listType = ""
    for item in x:
        if isinstance(item, str):
            newString += " " + item
        else:
            total += item
        if itemType != type(item).__name__:
            itemType = "mixed"

    #Print results
    print "The array you entered is of {} type".format(itemType)
    if newString != "":
        print "String: ", newString
    if total != 0:
        print "Sum: ", total


#Test Arguments
l1 = ['magical unicorns',19,'hello',98.98,'world']
l2 = [2,3,1,7,4,12]
l3 = ['magical','unicorns']

#call back functions with test arguments
testList(l1)
testList(l2)
testList(l3)
