import Deck from "./deck.js"

const playerCardSlot = document.querySelector('.player-card-slot')
const playerDeck = document.querySelector('.player-deck')

const deck = new Deck()
//deck.shuffle()
console.log(deck.cards)

playerDeck.innerHTML = "BB"
//playerCardSlot.appendChild(deck.cards[0].getHTML())

const playerCard = deck.pop()
playerCardSlot.appendChild(playerCard.getHTML())