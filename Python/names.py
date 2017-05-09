#Part 1
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def printStudents(students):
    for i in students:
        print i['first_name'], i['last_name']


# printStudents(students)


#Part 2
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }


def printStudentsAndInstructors(users):
    for key, data in users.items():
        count = 0
        print key
        for value in data:
            count += 1
            print count, "-", value["first_name"], value["last_name"], "-", len(value["first_name"]) + len(value["last_name"])

printStudentsAndInstructors(users)
