#Odd/Even

def odd_even():
    for count in range(1,2001):
        if count % 2 == 1:
            print "Number is ", count, ".  This is an odd number."
        else:
            print "Number is ", count, ".  This is an even number."

#Multiply

def multiply(arr, x):
    newList = []
    for i in arr:
        newList.append(i*x)
    return newList


#Hacker Challenge
def layered_multiples(arr):
    new_array = []
    for i in arr:
        count = 0
        x=[]
        while count < i:
            x.append(1)
            count += 1
        new_array.append(x)
    return new_array

x = layered_multiples(multiply([2,4,5],3))
print x