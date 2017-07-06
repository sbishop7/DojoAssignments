//
//  ViewController.swift
//  Hand_Of_Cards
//
//  Created by Seth Bishop on 7/5/17.
//  Copyright © 2017 Seth Bishop. All rights reserved.
//

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




class ViewController: UIViewController {
    var deck = Deck ()
    var hand = [Card]()
    var currentCard = 0
    
    @IBOutlet weak var CardNumber: UILabel!

    @IBOutlet weak var Suit: UILabel!
    @IBOutlet weak var TotalCardsInHand: UILabel!
    @IBOutlet weak var Rank: UILabel!
    @IBOutlet weak var previousButton: UIButton!
    @IBOutlet weak var nextButton: UIButton!
    @IBOutlet weak var discardButton: UIButton!
    @IBAction func PreviousButtonPressed(_ sender: UIButton) {
        if currentCard > 1 {
            currentCard -= 1
            CardNumber.text = "\(currentCard)"
            Suit.text = hand[currentCard-1].suit
            Rank.text = hand[currentCard-1].value
        }
        if currentCard  == 1 {
            previousButton.isHidden = true
        }
        if currentCard < hand.count {
            nextButton.isHidden = false
        }

    }
    @IBAction func NextButtonPressed(_ sender: UIButton) {
        if currentCard < hand.count {
            currentCard += 1
            CardNumber.text = "\(currentCard)"
            Suit.text = hand[currentCard-1].suit
            Rank.text = hand[currentCard-1].value
        }
        if currentCard > 1 {
            previousButton.isHidden = false
        }
        if currentCard == hand.count {
            nextButton.isHidden = true
        }
        
    }
    
    @IBAction func Discard(_ sender: Any) {
        if hand.count > 0 {
            deck.cards.append(hand.remove(at: currentCard-1))
            TotalCardsInHand.text = "\(hand.count)"
            CardsRemaining.text = "\(deck.cards.count)"
            TotalCardsInHand.text = "\(hand.count)"
            CardsRemaining.text = "\(deck.cards.count)"
            currentCard -= 1
            CardNumber.text = "\(currentCard)"
            
        }
        if currentCard  <= 1 {
            previousButton.isHidden = true
        }
        if currentCard == hand.count {
            nextButton.isHidden = true
        }
        if hand.count > 0 {
            Suit.text = hand[currentCard-1].suit
            Rank.text = hand[currentCard-1].value
        } else {
            Suit.text = "No"
            Rank.text = "Card"
        }
        if hand.count == 0 {
            discardButton.isHidden = true
        }
    }
    
    @IBOutlet weak var CardsRemaining: UILabel!
    @IBAction func DrawButtonPressed(_ sender: UIButton) {
        hand.append(deck.deal()!)
        TotalCardsInHand.text = "\(hand.count)"
        CardsRemaining.text = "\(deck.cards.count)"
        if currentCard == 0 {
            currentCard = 1
            CardNumber.text = "\(currentCard)"
            Suit.text = hand[currentCard-1].suit
            Rank.text = hand[currentCard-1].value
            discardButton.isHidden = false
        }
        if currentCard < hand.count {
            nextButton.isHidden = false
        }
        
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        deck.shuffle()
        TotalCardsInHand.text = "\(hand.count)"
        CardsRemaining.text = "\(deck.cards.count)"
        CardNumber.text = "\(currentCard)"
        previousButton.isHidden = true
        nextButton.isHidden = true
        discardButton.isHidden = true
        Suit.text = "No"
        Rank.text = "Card"
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    


}

