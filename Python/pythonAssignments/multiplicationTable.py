x = 0
string = ""
row = 0
column = 0
count = 1
 
#row 1

while row < 13:
    if x == 0:
        string = "x "
        while count < 13:
            if count < 10:
                string += "   " + str(count)
            else:
                string += "  " + str(count)
            count += 1
    else:
        if x < 10:
            string += str(x) + " "
        else: 
            string += str(x)
        while count < 13:
            value = x * count
            if value < 100:
                string += " "
            if value < 10: 
                string += " "
            string += " " + str(value)
            count += 1
    print string
    row += 1
    x += 1
    count = 1
    string = ""

"""
while count < 13:
    string += " " + str(x * count)
    count += 1
    """