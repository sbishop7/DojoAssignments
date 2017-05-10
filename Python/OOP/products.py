class Product(object):
    def __init__(self, price, itemName, weight, brand, cost):
        self.price = price
        self.item_name = itemName
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = "for sale"
    def sell(self):
        self.status = "sold"
        return self
    def addTax(self, tax):
        totalPrice = self.price + self.price * tax
        return totalPrice
    def returnProduct(self, reason):
        if reason == "defective":
            self.price = 0
            self.status = reason
        elif reason == "in the box":
            self.status = "for sale"
        elif reason == "opened":
            self.status = "used"
            self.price *= .8
        return self
    def displayInfo(self):
        #Display Info: show all product details.
        print "Price:", self.price
        print "Item Name:", self.item_name
        print "Weight:", self.weight
        print "Brand:", self.brand
        print "Cost:", self.cost
        print "Status:", self.status
        return self

product1 = Product(79.99, "Masterpiece Thundercracker", "2lbs", "Transformers", 50)

product1.sell().displayInfo()

product1.addTax(.095)

product1.returnProduct("opened").displayInfo()