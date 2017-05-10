class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print self.name
        print self.health
        return self

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150
    def pet(self):
        self.health += 5
        return self

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print "this is a dragon!"
        super(Dragon, self).displayHealth()
        return self

monkey = Animal("George")

dog1 = Dog("Cookie")

dragon1 = Dragon("Smoug")

for count in range(0,3):
    monkey.walk()
    dog1.walk()
    dragon1.walk()

for count in range(0,2):
    monkey.run()
    dog1.run()
    dragon1.run().fly()

dog1.pet()

# monkey.displayHealth()

# dog1 = Dog(Cookie)

# dog1.displayHealth()

dragon1.displayHealth()

animal2 = Animal("Bob")

animal2.displayHealth()

# animal2.fly()

# animal2.pet()