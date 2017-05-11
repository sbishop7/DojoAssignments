# callCount = 0
class Call(object):
    def __init__(self, id, name, phone_number, time, reason):
        self.id = id
        self.name = name
        self.phone = phone_number
        self.time = time
        self.reason = reason
    def displayInfo(self):
        print "Caller: ", self.id
        print "Name: ", self.name
        print "Phone number:", self.phone
        print "Time of call:", self.time
        print "Reason for call:", self.reason
        return self

class CallCenter(object):
    def __init__(self):
        self.callCount = 0
        self.calls = []
        self.queue = len(self.calls)
    def newCall(self, name, phone_number, time, reason):
        self.callCount += 1
        self.calls.append(Call(self.callCount, name, phone_number, time, reason))
        self.queue = len(self.calls)
    def displayCalls(self):
        print "Calls in queue:", self.queue
        for caller in self.calls:
            caller.displayInfo()
        return self
    def displayQueue(self):
        print "Calls in queue:", self.queue
        for caller in self.calls:
            print "Caller:", caller.name,caller.phone
            # print "Phone Numeber:", caller.phone
        return self
    def removeCall(self):
        self.calls.pop(0)
        self.queue = len(self.calls)
        return self
    def removeCallByPhone(self, phone):
        index = 0
        for caller in self.calls:
            if caller.phone == phone:
                self.calls.pop(index)
            index += 1
        self.queue = len(self.calls)
        return self
    def sortByTime(self):
        
        return self


# call1 = Call(1, "Seth", "555-5555", "8am", "bored")
# call2 = Call(2, "Bob", "543-6729", "9:20am", "confused")

# call1.displayInfo()
# print ""
# call2.displayInfo()

CallCenter1 = CallCenter()
CallCenter1.newCall("Seth", "555-5555", "8am", "bored")

CallCenter1.displayQueue()
CallCenter1.newCall("Bob", "543-6729", "9:20am", "confused")
CallCenter1.newCall("Derek", "616-6984", "10:20am", "checking in")

# CallCenter1.displayCalls()
# CallCenter1.displayQueue()
# CallCenter1.removeCall().displayQueue()
CallCenter1.removeCallByPhone("543-6729").displayQueue()
