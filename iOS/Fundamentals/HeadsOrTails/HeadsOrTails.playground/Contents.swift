import UIKit

func tossCoin() -> String {
    print ("Tossing a Coin!")
    let coin = Int(arc4random_uniform(UInt32(2)))
    if (coin == 0) {
        print ("Heads")
        return ("Heads")
    }
    else{
        print ("Tails")
        return ("Tails")
    }
}

print (tossCoin())

func tossMultipleCoins(tosses: Int) -> Double {
//    print(tosses)
    var heads = 0
    var tails = 0
    
    for _ in 1...5 {
        let result = tossCoin()
        if (result == "Heads"){
            heads += 1
        } else {
            tails += 1
        }
    }
    
    
    return Double(tosses)/Double(heads)
}

print (tossMultipleCoins(tosses: 20))