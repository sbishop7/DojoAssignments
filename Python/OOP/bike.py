class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def displayInfo(self):
        print self.price
        print self.max_speed
        print self.miles
        return self
    def ride(self):
        print "Riding"
        self.miles += 10
        return self
    def reverse(self):
        print "Reversing"
        for count in range(0,5):
            if self.miles != 0:
                self.miles -= 1
        return self

bike1 = Bike(200, "25mph")
bike2 = Bike(400, "45mph")
bike3 = Bike(100, "10mph")

for count in range(0,3):
    bike1.ride()
print "Bike 1:"
bike1.displayInfo()

for count in range(0,2):
    bike2.ride()

for count in range(0,2):
    bike2.reverse()

print ""
print "Bike 2:"
bike2.displayInfo()

for count in range(0,3):
    bike3.reverse()

print ""
print "Bike 3:"
bike3.displayInfo()

