#Find and Replace
str = "It's thanksgiving day. It's my birthday,too!"
print str.find('day')
print str.replace('day', 'month')

#Min and Max
x = [2,54,-2,7,12,98]
print min(x)
print max(x)

#First and Last
x = ["hello",2,54,-2,7,12,98,"world"]
newList = []
newList.append(x[0])
newList.append(x[len(x)-1])
print newList

#New List
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
list1 = x[0:len(x)/2]
list2 = x[len(x)/2:len(x)]
list3 = [list1] + list2

print list3
