import Deck from "./deck.js"


const computerCardSlot0 = document.querySelector(".computer-card-slot0")
const computerCardSlot1 = document.querySelector(".computer-card-slot1")
const computerCardSlot2 = document.querySelector(".computer-card-slot2")
const computerCardSlot3 = document.querySelector(".computer-card-slot3")
const playerCardSlot0 = document.querySelector(".player-card-slot0")
const playerCardSlot1 = document.querySelector(".player-card-slot1")
const playerCardSlot2 = document.querySelector(".player-card-slot2")
const playerCardSlot3 = document.querySelector(".player-card-slot3")


var wholeDeck;
var playerDeck, computerDeck;

var i = 0

startGame()
function startGame() {
    wholeDeck = new Deck()
    //deck.shuffle()
    const deckMidpoint = Math.ceil(wholeDeck.numberOfCards / 2)
    playerDeck = new Deck(wholeDeck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(wholeDeck.cards.slice(deckMidpoint, wholeDeck.numberOfCards))

    var playerCard0 = createCard(playerDeck, playerCardSlot0)
    var playerCard1 = createCard(playerDeck, playerCardSlot1)
    var playerCard2 = createCard(playerDeck, playerCardSlot2)
    var playerCard3 = createCard(playerDeck, playerCardSlot3)

    playerCard0.classList.add('playerCard')
    playerCard1.classList.add('playerCard')
    playerCard2.classList.add('playerCard')
    playerCard3.classList.add('playerCard')

    createCard(computerDeck, computerCardSlot0)
    createCard(computerDeck, computerCardSlot1)
    createCard(computerDeck, computerCardSlot2)
    createCard(computerDeck, computerCardSlot3)


}

document.getElementById('button').onclick = function() {
    playerDeckFlip()
};

var cards = Array.from(document.getElementsByClassName("card"))
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("zoomCard")
    });
});

function createCard(deck, cardSlot) {
    var cardImg = document.createElement('IMG')
    var cardText = document.createElement('h1')
    //var cardDiv = document.createElement('div')
    var innerCardDiv = document.createElement('div')
    var innerInnerCardDiv = document.createElement('div')
    var innerInnerCardDiv2 = document.createElement('div')

    //cardDiv.setAttribute("draggable", "true")

    //cardDiv.classList.add("maincontainer")
    innerCardDiv.classList.add("card")
    innerInnerCardDiv2.classList.add("back")  
    
    var currentCard = deck.pop()
    var currentCardImg = currentCard.image
    cardImg.setAttribute("src", currentCardImg); 
    cardImg.classList.add("front")

    cardText.innerText = "Beast Battle"

    cardSlot.appendChild(innerCardDiv)
    //document.body.appendChild(cardDiv)
    //cardDiv.appendChild(innerCardDiv)

    innerCardDiv.appendChild(innerInnerCardDiv)
    innerCardDiv.appendChild(innerInnerCardDiv2)
    innerInnerCardDiv.appendChild(cardImg)
    innerInnerCardDiv2.appendChild(cardText)

    i += 1
    return innerCardDiv
    //return cardDiv
}

const boxes = document.querySelectorAll('.box');
var draggables = document.querySelectorAll('.maincontainer')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add("dragging")
    })
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })

})

boxes.forEach(box => {
    box.addEventListener('dragover', e => {
        e.preventDefault()
        e.target.classList.remove('drag-over');
        const afterElement = getDragAfterElement(box, e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            box.appendChild(draggable)
            createCard()
        }

    })
})

function getDragAfterElement(box, y) {
    var draggableElements = [...box.querySelectorAll('.maincontainer:not(.dragging)')]
    
    return draggableElements.reduce((closest, child) => {
        const boxBound = child.getBoundingClientRect()
        const offset = y - boxBound.top - boxBound.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child } 
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}


function setPlayerDeck() {
    console.log('test')
}


function playerDeckFlip() {
    var playerCards = Array.from(document.getElementsByClassName("playerCard"))
    playerCards.forEach(playerCard => {
        playerCard.classList.toggle("flipCard")
    })
}
