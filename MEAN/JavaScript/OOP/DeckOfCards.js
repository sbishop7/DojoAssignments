function Card(suit, rank){
	this.suit = suit
	this.rank = rank
}

Card.prototype.print = function(){
	const suits = ["Hearts", "Spades", "Clubs", "Diamonds"]	
	const ranks = {
		1: "Ace",
		11: "Jack",
		12: "Queen",
		13: "Kings"
	}

	return `${ranks[this.rank] ? ranks[this.rank] : this.rank} of ${suits[this.suit]}`
}

function Deck(){
	let deck_of_cards = []

	for(let suit = 0; suit < 4; suit++){
		for(let rank = 1; rank <= 13; rank++){
			deck_of_cards.push(new Card(suit, rank))
		}
	}

	this.deal = () => {
		if(deck_of_cards){
			return deck_of_cards.pop()
		} else {
			// Rebuild the deck somehow?
		}
	}
	
	this.shuffle = () => {
		for(let i = 0; i < deck_of_cards.length; i++){
			let j = Math.floor(Math.random()*deck_of_cards.length)
			let temp = deck_of_cards[i]
			deck_of_cards[i] = deck_of_cards[j]
			deck_of_cards[j] = temp
		}
	}
}

let my_deck = new Deck()
my_deck.shuffle()
// console.log(my_deck.debug())
// console.log(my_deck.deck_of_cards)
console.log(my_deck.deal().print())


//create function to determine winner.  should contain:
// 1. compare cards (in table array)  player who played lowest card collects the cards.  
// 2. count each players' hands and displays scores
// 3. if player's hand.length == 0, then player wins
// NOTE:  This is a two player only game

function determineWinnerOfHand(){
    if(tableTop[tableTop.length-1].cardPlayed.rank == tableTop[tableTop.length-2].cardPlayed.rank){
        //draw.  player plays another set of cards
    }
    else if(tableTop[tableTop.length-1].cardPlayed.rank < tableTop[tableTop.length-2].cardPlayed.rank){
        //losing player takes cards
        let loser = tableTop[tableTop.lengh-1].player;
        for(var i=tableTop.length-1; i>=0; i--){
            loser.collectCard(tableTop[i].cardPlayed);
        }
        tableTop.pop();
    }
    else{
        let loser = tableTop[tableTop.lengh-2].player;
        for(var i=tableTop.length-1; i>=0; i--){
            loser.collectCard(tableTop[i].cardPlayed);
        }
        tableTop.pop();
    }
}

function score(){
    console.log(player1['name'], " has ", player1['hand'].length, " cards.  ", player2['name'], " has ", player2['hand'].length, " cards.  ")
    if(player1['hand'].length == 0){
        console.log(player1['name'], " wins!")
    }
    else if(player2['hand'].length == 0){
        console.log(player2['name'], " wins!")
    }
}

