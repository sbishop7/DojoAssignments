#Multiples
print "MULTIPLES"
#Part I - Write code that prints all the odd numbers from 1 to 1000. Use the for loop and don't use a list to do this exercise.
for odd in range(1,1000, 2):
    print odd
    
#Part II - Create another program that prints all the multiples of 5 from 5 to 1,000,000.
for fives in range(5,1000000, 5):
    print fives

#Sum List
print " "
print "SUM LIST"
#Create a program that prints the sum of all the values in the list: a = [1, 2, 5, 10, 255, 3]
a = [1, 2, 5, 10, 255, 3]
sum = 0
for item in a:
    sum += item
print "Sum is ", sum


#Average List
print " "
print "AVERAGE LIST"
#Create a program that prints the average of the values in the list: a = [1, 2, 5, 10, 255, 3]
a = [1, 2, 5, 10, 255, 3]
sum = 0
for item in a:
    sum += item
avg = sum/len(a)
print "Average is ", avg