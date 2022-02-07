import Deck from "./deck.js"

const deck = new Deck()
var playerCardImg;

var cardImg = document.createElement('IMG')
var cardText = document.createElement('h1')
var cardDiv = document.createElement('div')
var innerCardDiv = document.createElement('div')
var innerInnerCardDiv = document.createElement('div')
var innerInnerCardDiv2 = document.createElement('div')


getHTML()
getHTML()
getHTML()



var cards = Array.from(document.getElementsByClassName("card"))
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipCard")
        playerCardImg = deck.pop()
        cardImg.setAttribute("src", playerCardImg); 
        innerInnerCardDiv.appendChild(cardImg)
    });
});


function getHTML() {
    var cardImg = document.createElement('IMG')
    var cardText = document.createElement('h1')
    var cardDiv = document.createElement('div')
    var innerCardDiv = document.createElement('div')
    var innerInnerCardDiv = document.createElement('div')
    var innerInnerCardDiv2 = document.createElement('div')

    cardDiv.classList.add("maincontainer")
    innerCardDiv.classList.add("card")
    innerInnerCardDiv2.classList.add("back")   

    cardImg.setAttribute("src", playerCardImg); 
    cardImg.classList.add("front")

    cardText.innerText = "Beast Battle"

    document.body.appendChild(cardDiv)
    cardDiv.appendChild(innerCardDiv)
    innerCardDiv.appendChild(innerInnerCardDiv)
    innerCardDiv.appendChild(innerInnerCardDiv2)
    innerInnerCardDiv.appendChild(cardImg)
    innerInnerCardDiv2.appendChild(cardText)

    return cardDiv
}
