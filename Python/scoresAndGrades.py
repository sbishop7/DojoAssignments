def generateGrade():
    print "Scores and Grades"
    import random
    for count in range(0,10):
        random_num = random.randint(60, 100)
        grade = ""
        if random_num in range(90,101):
            grade = "A"
        elif random_num in range(80,90):
            grade = "B"
        elif random_num in range(70,80):
            grade = "C"
        elif random_num in range(60,70):
            grade = "S"

        print "Score: " + str(random_num) + "; Your grade is " + grade
    print "End of the program.  Bye!"

generateGrade()