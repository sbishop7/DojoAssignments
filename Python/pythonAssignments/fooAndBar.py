number = 100
while number < 100000:
    prime = True
    i = 2
    while i < number:
        if number == i * i:
            print number, "Bar"
        if number % i == 0:
            prime = False
        i += 1
    if prime == True:
        print number, "Foo"
    else:
        print "FooBar"
    number += 1

