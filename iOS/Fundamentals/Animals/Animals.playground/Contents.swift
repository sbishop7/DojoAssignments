import UIKit

class Animal {
    var name: String
    var health = 100
    
    init(name: String){
        self.name = name
    }
    
    func displayHealth () {
        print (self.health)
    }
    
}

class Cat: Animal {
    
    init(catName: String) {
        super.init(name: catName)
        self.health = 150
    }

    func growl () {
        print ("Rawr!")
    }
    
    func run () {
        print ("Running")
        self.health -= 10
    }
}

class Cheetah: Cat {
    override func run() {
        if (self.health > 50){
            print ("Running Fast")
            self.health -= 50
        }
    }
    func sleep () {
        self.health += 50
    }
}

class Lion: Cat {
    init(lionName: String){
        super.init(catName: lionName)
        self.health = 200
    }
    override func growl() {
        print("ROAR!!!! I am the King of the Jungle")
    }
}





//var myCat = Cat (catName: "Coco")
//
//myCat.growl()
//myCat.run()
//myCat.displayHealth()
print("*********************Cheetah*********************")
var cheetor = Cheetah(catName: "Cheetor")
cheetor.growl()
cheetor.run()
cheetor.run()
cheetor.run()
cheetor.run()
cheetor.displayHealth()
print("**********************Lion***********************")
var lion = Lion(lionName: "Simba")
lion.run()
lion.run()
lion.run()
lion.displayHealth()
lion.growl()

