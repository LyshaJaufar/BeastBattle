import Deck from "./deck.js"

var deck = new Deck()

document.getElementsByClassName('sort-btn')[0].onclick = function() {
    console.log(deck.cards[0].frightFactor)
    console.log("")
};
