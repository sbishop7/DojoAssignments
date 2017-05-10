# class User(object):
#     name = "Anna"
# anna = User()
# print "anna's name: ", anna.name
# User.name = "Bob"
# print "anna's name after change:", anna.name
# bob = User()
# print "bob's name:", bob.

# class User(object):
#     def __init__(self, name, email):
#         self.name = name
#         self.email = email
#         self.logged = False
# user1 = User("Anna Propas", "anna@anna.com")
# print user1.name
# print user1.logged
# print user1.email

# instantiate class User
class User(object):
    # this method to run every time a new object is instantiated
    def __init__(self, name, email):
	# instance attributes from
        self.name = name
        self.email = email
        self.logged = True
    # login method changes the logged status for a single instance (the instance calling the method)
    def login(self):
        self.logged = True
        print self.name + " is logged in."
        return self
    # logout method changes the logged status for a single instance (the instance calling the method)
    def logout(self):
        self.logged = False
        print self.name + " is not logged in"
        return self
    # print name and email of the calling instance
    def show(self):
        print "My name is {}, and I am a {}. You can email me at {}".format(self.name, self.permission, self.email)
        return self

user1 = User("Seth", "bishop@uw.edu")

user1.show()

# print user1
