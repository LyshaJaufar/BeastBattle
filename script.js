import Deck from "./deck.js"

var deck;
var slotted = false;


var i = 0

startGame()
function startGame() {
    deck = new Deck()
    //deck.shuffle()
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    var playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    var computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

    createCard()
    createCard()
    createCard()
    createCard()
    createCard()
    createCard()
    createCard()
    createCard()

}




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

