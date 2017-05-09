name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar", "Homer", "Waspinator"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas", "ant", "wasp"]

def make_dict(arr1, arr2):
    new_dict = {}
    if len(arr2) > len(arr1):
        newArr = zip(arr2, arr1)
    else:
        newArr = zip(arr1, arr2)
    new_dict = dict(newArr)
    return new_dict

print make_dict(favorite_animal, name)