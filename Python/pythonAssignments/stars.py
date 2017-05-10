def draw_stars(arr):
    for i in arr:
        count = 0
        myStr = ""
        if isinstance(i, str):
            stop = len(i)
            # print len(i)
            x = i[0].lower()
        else:
            x = "*"
            stop = i
        while count < stop:
            myStr += x
            count += 1
        print myStr
            

draw_stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])