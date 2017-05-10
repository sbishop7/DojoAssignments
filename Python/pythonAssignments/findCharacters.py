"""
Write a program that takes a list of strings and a string containing a single character, and prints a new list of all the strings containing that character.

"""
l = ['hello','world','my','name','is','Anna']
char = 'a'

n = []

for item in l:
    if item.find(char) > 0:
        n.append(item)

print n
