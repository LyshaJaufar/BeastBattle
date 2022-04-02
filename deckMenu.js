import Deck from "./deck.js"

var deck = new Deck()


document.getElementById("age").onclick = function() {
    console.log(deck.cards[0].frightFactor)
    console.log("")
};
