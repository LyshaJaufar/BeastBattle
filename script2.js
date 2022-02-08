import Deck from "./deck2.js"

const deck = new Deck()
//deck.shuffle()

var cardImg = document.createElement('IMG')
var cardText = document.createElement('h1')
var cardDiv = document.createElement('div')
var innerCardDiv = document.createElement('div')
var innerInnerCardDiv = document.createElement('div')
var innerInnerCardDiv2 = document.createElement('div')

var i = 0

createCard()
createCard()
createCard()


var cards = Array.from(document.getElementsByClassName("card"))
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipCard")
    });
});

function createCard() {
    var cardImg = document.createElement('IMG')
    var cardText = document.createElement('h1')
    var cardDiv = document.createElement('div')
    var innerCardDiv = document.createElement('div')
    var innerInnerCardDiv = document.createElement('div')
    var innerInnerCardDiv2 = document.createElement('div')

    cardDiv.classList.add("maincontainer")
    innerCardDiv.classList.add("card")
    innerInnerCardDiv2.classList.add("back")  
    
    var playerCard = deck.pop()
    var playerCardImg = playerCard.image
    cardImg.setAttribute("src", playerCardImg); 
    cardImg.classList.add("front")

    cardText.innerText = "Beast Battle"

    document.body.appendChild(cardDiv)
    cardDiv.appendChild(innerCardDiv)
    innerCardDiv.appendChild(innerInnerCardDiv)
    innerCardDiv.appendChild(innerInnerCardDiv2)
    innerInnerCardDiv.appendChild(cardImg)
    innerInnerCardDiv2.appendChild(cardText)

    i += 1

    return cardDiv
}
