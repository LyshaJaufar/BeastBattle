import Deck from "./deck.js"

const playerCardSlot = document.querySelector('.player-card-slot')
const playerDeck = document.querySelector('.player-deck')

const deck = new Deck()
//deck.shuffle()



playerDeck.innerHTML = "Beast Battle"
//playerCardSlot.appendChild(deck.cards[0].getHTML())

/*
playerDeck.addEventListener('click', () => {
    const playerCard = deck.pop()
    playerCardSlot.appendChild(playerCard.getHTML())
})
*/

playerDeck.addEventListener("click", flipCard)

function flipCard() {

    playerDeck.classList.toggle("flipCard")
    var playerCard = deck.pop()
    
    document.body.appendChild(playerCard.getHTML())
}


