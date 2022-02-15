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
var playerCard0, playerCard1, playerCard2, playerCard3, computerCard0, computerCard1, computerCard2, computerCard3;
var roundStarted;
var playerBoxes;

var i = 0

startGame()
function startGame() {
    setupGame()
}

function setupGame() {
    wholeDeck = new Deck()
    //deck.shuffle()
    const deckMidpoint = Math.ceil(wholeDeck.numberOfCards / 2)
    playerDeck = new Deck(wholeDeck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(wholeDeck.cards.slice(deckMidpoint, wholeDeck.numberOfCards))

    roundStarted = false

    playerCard0 = createCard(playerDeck, playerCardSlot0)
    playerCard1 = createCard(playerDeck, playerCardSlot1)
    playerCard2 = createCard(playerDeck, playerCardSlot2)
    playerCard3 = createCard(playerDeck, playerCardSlot3)

    playerCard0.classList.add('playerCard')
    playerCard1.classList.add('playerCard')
    playerCard2.classList.add('playerCard')
    playerCard3.classList.add('playerCard')

    computerCard0 = createCard(computerDeck, computerCardSlot0)
    computerCard1 = createCard(computerDeck, computerCardSlot1)
    computerCard2 = createCard(computerDeck, computerCardSlot2)
    computerCard3 = createCard(computerDeck, computerCardSlot3)

    computerCard0.classList.add('computerCard')
    computerCard1.classList.add('computerCard')
    computerCard2.classList.add('computerCard')
    computerCard3.classList.add('computerCard')
}

document.getElementById('button').onclick = function() {
    deckFlip()
};

document.getElementById('battleButton').onclick = function() {
    allHaveAttribute()
    function allHaveAttribute() {
        for (var i = 0; i < playerBoxes.length; i++) {
            if (playerBoxes[i].getAttribute("empty") !== "false") {
            }
        }
        battlePhase()
    }
};

var cards = Array.from(document.getElementsByClassName("card"))
cards.forEach(card => {
    card.addEventListener("dragstart", () => {
        card.classList.add("zoomCard")
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



function deckFlip() {
    if (!roundStarted){
        playerCard0.classList.toggle("flip-player-card0")
        playerCard1.classList.toggle("flip-player-card1")
        playerCard2.classList.toggle("flip-player-card2")
        playerCard3.classList.toggle("flip-player-card3")
        computerCard0.classList.toggle("flip-computer-card0")
        computerCard1.classList.toggle("flip-computer-card1")
        computerCard2.classList.toggle("flip-computer-card2")
        computerCard3.classList.toggle("flip-computer-card3")

        roundStarted = true

        startPhase()
    }
}

function startPhase(){
    playerBoxes = document.querySelectorAll('.playerBox');
    var playerBoxes1 = Array.from(document.querySelectorAll('.playerBox'))
    playerBoxes1.forEach(playerBox1 => {
        playerBox1.setAttribute("empty", "true")
    })
    var draggables = document.querySelectorAll('.maincontainer')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add("dragging")
                setTimeout(() => {
                    draggable.classList.add('hide');
            }, 0);
        })
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging')
            draggable.classList.remove('hide');
        })

    })


    playerBoxes.forEach(playerBox => {
        playerBox.addEventListener('dragover', e => {
            e.preventDefault()
            e.target.classList.remove('drag-over');
            const afterElement = getDragAfterElement(playerBox, e.clientY)
            const draggable = document.querySelector('.dragging')
            if (afterElement == null) {
                playerBox.appendChild(draggable)
                createCard()
            }

        })

        playerBox.addEventListener('drop', e => {
            playerBox.setAttribute("empty", "false")
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
}


function battlePhase() {
    
}