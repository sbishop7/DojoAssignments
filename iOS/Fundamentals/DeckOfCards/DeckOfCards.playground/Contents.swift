import UIKit

struct Card {
    var value: String
    var suit: String
    var numericalValue: Int
}

class Deck {
    var cards = [Card]()
    
    init(){
        self.reset()
    }


    func reset(){
        let values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
        let suits = ["Clubs", "Spades", "Hearts", "Diamonds"]
        self.cards = [Card]()
        for suit in suits {
            for i in 0...12 {
                let newCard = Card(value: values[i], suit: suit, numericalValue: i+1)
                self.cards.append(newCard)
            }
        }
    }
    
    func deal() -> Card? {
        if self.cards.count > 0 {
//            print ("there are cards")
            return self.cards.remove(at: 0)
        }
        else {
            return nil
        }
    }
    
    func shuffle () {
        for i in 0...self.cards.count-1 {
            let x = arc4random_uniform(UInt32(cards.count))
            let temp = cards[Int(x)]
            cards[Int(x)] = cards[i]
            cards[i] = temp
        }
    }
}

class Player {
    var name: String
    var hand: [Card]
    
    init(name: String){
        self.name = name
        self.hand = [Card]()
    }
    
    func draw (deck: Deck) -> Card? {
        if let newCard = deck.deal() {
            self.hand.append(newCard)
            return newCard
        }
        else {
            return nil
        }
    }
    
    func discard (suit: String, value: String) -> Bool {
        if (self.hand.count > 0) {
            for i in 0...self.hand.count - 1 {
                if(self.hand[i].suit == suit && self.hand[i].value == value){
                    self.hand.remove(at: i)
                    return true;
                }
            }
            return false
        }
        else {
            return false
        }
    }
}

let myDeck = Deck()
//
//print (myDeck.cards)

//print (myDeck.deal())

myDeck.shuffle()

//print (myDeck.cards)

let me = Player(name: "Seth")

print (me.hand)

me.draw(deck: myDeck)
me.draw(deck: myDeck)
me.draw(deck: myDeck)
me.draw(deck: myDeck)
me.draw(deck: myDeck)

print (me.hand)

print (me.discard(suit: "Clubs", value: "Queen"))



