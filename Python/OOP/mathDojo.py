class MathDojo(object):
    def __init__(self):
        self.result = 0
    def add(self, x, *y):
        if isinstance(x, int):
            self.result += x
        else:
            for value in x:
                self.result += value
        for value in y:
            if isinstance(value, int):
                self.result += value
            else:
                for data in value:
                    self.result += data
        return self
    def subtract(self, x, *y):
        if isinstance(x, int):
            self.result -= x
        else:
            for value in x:
                self.result -= value
        for value in y:
            if isinstance(value, int):
                self.result -= value
            else:
                for data in value:
                    self.result -= data
        return self
    # def add1(self, x)

# md = MathDojo().add(2).add(2, 5).subtract(3, 2).result

md2 = MathDojo().add((1),3,4).add((3, 5, 7, 8), [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result

print md2