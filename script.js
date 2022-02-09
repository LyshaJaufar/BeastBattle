import Deck from "./deck.js"

const deck = new Deck()
const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
var playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
var computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))


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
createCard()
createCard()
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

    cardDiv.setAttribute("draggable", "true")
    cardDiv.addEventListener('dragstart', dragStart);
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

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    console.log(draggable)
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}