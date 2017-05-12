class Patient(object):
    def __init__(self, ident, name, allergies, bedNumber):
        self.id = ident
        self.name = name
        self.allergies = allergies
        self.bedNumber = "none"
    def displayInfo(self):
        print "Patient ID:", self.id
        print "Name", self.name
        print "Allergies:", self.allergies
        print "Bed:", self.bedNumber

class Hospital(object):
    def __init__(self, name, capacity):
        self.patients = []
        self.name = name
        self.capacity = capacity
    def admit(self, patientID, bed):
        if len(self.patients) < self.capacity:
            self.patients.append(patientID.id)
            patientID.bedNumber = bed
            print "The patient has been admitted"
        else:
            print "The hospital is full"
        return self
    def discharge(self, patientID):
        index = 0
        for data in self.patients:
            if data == patientID:
                self.patients.pop(index)
            index += 1
        patientID.bedNumber = "none"
        return self
    def displayPatients(self):
        for value in self.patients:
            print value
            # value.displayInfo()
        return self

        
uwmc = Hospital("UWMC", 2)

patient1 = Patient("patient1", "Seth", "none", "none")
patient2 = Patient("patient2", "Chandler", "peanuts", "none")
patient3 = Patient("patient3", "Jessica", "wheat", "none")

uwmc.admit(patient1, 1)
uwmc.admit(patient2, 2)
uwmc.admit(patient3, 3)

uwmc.displayPatients()
print uwmc.patients

patient1.displayInfo()

# uwmc.discharge(patient1)

patient1.displayInfo()

uwmc.displayPatients()

patient1.displayInfo()