import Deck from "./deck.js"


const computerCardSlot0 = document.querySelector(".computer-card-slot0")
const computerCardSlot1 = document.querySelector(".computer-card-slot1")
const computerCardSlot2 = document.querySelector(".computer-card-slot2")
const computerCardSlot3 = document.querySelector(".computer-card-slot3")
const playerCardSlot0 = document.querySelector(".player-card-slot0")
const playerCardSlot1 = document.querySelector(".player-card-slot1")
const playerCardSlot2 = document.querySelector(".player-card-slot2")
const playerCardSlot3 = document.querySelector(".player-card-slot3")

var playerBox0 = document.querySelector(".playerBox0")
var playerBox1 = document.querySelector(".playerBox1")
var playerBox2 = document.querySelector(".playerBox2")
var playerBox3 = document.querySelector(".playerBox3")

var wholeDeck;
var playerDeck, computerDeck;
var playerCard0, playerCard1, playerCard2, playerCard3, computerCard0, computerCard1, computerCard2, computerCard3;
var playerHand = [], computerHand = [];
var roundStarted;
var playerBoxes;
var draggable;

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

    playerCard0 = createCard(playerDeck, playerCardSlot0, "playerD")
    playerCard1 = createCard(playerDeck, playerCardSlot1, "playerD")
    playerCard2 = createCard(playerDeck, playerCardSlot2, "playerD")
    playerCard3 = createCard(playerDeck, playerCardSlot3, "playerD")

    playerCard0.classList.add('playerCard')
    playerCard1.classList.add('playerCard')
    playerCard2.classList.add('playerCard')
    playerCard3.classList.add('playerCard')

    computerCard0 = createCard(computerDeck, computerCardSlot0, "computerD")
    computerCard1 = createCard(computerDeck, computerCardSlot1, "computerD")
    computerCard2 = createCard(computerDeck, computerCardSlot2, "computerD")
    computerCard3 = createCard(computerDeck, computerCardSlot3, "computerD")

    computerCard0.classList.add('computerCard')
    computerCard1.classList.add('computerCard')
    computerCard2.classList.add('computerCard')
    computerCard3.classList.add('computerCard')
}

document.getElementById('button').onclick = function() {
    deckFlip()

    //createCard(computerDeck, computerCardSlot0)
    //createCard(computerDeck, computerCardSlot1)
    //createCard(computerDeck, computerCardSlot2)
    //createCard(computerDeck, computerCardSlot3)

    //createCard(playerDeck, playerCardSlot0)
    //createCard(playerDeck, playerCardSlot1)
    //createCard(playerDeck, playerCardSlot2)
    //createCard(playerDeck, playerCardSlot3)
};

document.getElementById('battleButton').onclick = function() {
    allHaveAttribute()
    function allHaveAttribute() {
        var start = true;
        for (var i = 0; i < playerBoxes.length; i++) {
            if (playerBoxes[i].getAttribute("empty") !== "false") {
                var start = false;
            }
        }
        if (start) {
            battlePhaseAnimation()
        }
    }
};

var cards = Array.from(document.getElementsByClassName("card"))
cards.forEach(card => {
    card.addEventListener("dragstart", () => {
        card.classList.add("zoomCard")
    });
});

function createCard(deck, cardSlot, deckId) {
    var cardImg = document.createElement('IMG')
    var cardText = document.createElement('h1')
    //var cardDiv = document.createElement('div')
    var innerCardDiv = document.createElement('div')
    var innerInnerCardDiv = document.createElement('div')
    var innerInnerCardDiv2 = document.createElement('div')

    //cardDiv.setAttribute("draggable", "true")
    innerCardDiv.classList.add("card")
    innerInnerCardDiv2.classList.add("back")   
    
    var currentCard = deck.pop()
    var currentCardImg = currentCard.image
    cardImg.setAttribute("src", currentCardImg); 
    cardImg.classList.add("front")

    cardText.innerText = "Beast Battle"

    cardSlot.appendChild(innerCardDiv)
    innerCardDiv.appendChild(innerInnerCardDiv)
    innerCardDiv.appendChild(innerInnerCardDiv2)
    innerInnerCardDiv.appendChild(cardImg)
    innerInnerCardDiv2.appendChild(cardText)

    if (deckId == "playerD") {
        playerHand[i] = currentCard
    }
    if (deckId == "computerD") {
        computerHand[i - 4] = currentCard
    }

    i += 1
    return innerCardDiv
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

        playerCard0.classList.add("flippedPlayerCard")
        playerCard1.classList.add("flippedPlayerCard")
        playerCard2.classList.add("flippedPlayerCard")
        playerCard3.classList.add("flippedPlayerCard")

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
            draggable = document.querySelector('.dragging')

            if (afterElement == null) {
                playerBox.appendChild(draggable)
            }

        })

        playerBox.addEventListener('drop', e => {
            playerBox.setAttribute("empty", "false")
        })

        playerBox.addEventListener('drop', e => {
            var target = draggable.getElementsByClassName("playerCard")[0]
            target.classList.remove("flippedPlayerCard")
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



function battlePhaseAnimation() {

    var overlay = document.createElement("DIV")
    var square = document.createElement("V")
    var sword = document.createElement("div")
    var blade = document.createElement("div")
    var handle = document.createElement("div")

    overlay.classList.add("overlay-text")
    overlay.classList.add("visible")
    overlay.innerHTML = "BATTLE"
    document.body.appendChild(overlay)

    square.classList.add("square")
    sword.classList.add("sword")
    blade.classList.add("blade")
    handle.classList.add("handle")

    square.appendChild(sword)
    sword.appendChild(blade)
    sword.appendChild(handle)
    document.body.appendChild(square)

    var computerBox0 = document.querySelector(".computerBox0") 
    var computerBox1 = document.querySelector(".computerBox1")
    var computerBox2 = document.querySelector(".computerBox2")
    var computerBox3 = document.querySelector(".computerBox3")

    setTimeout(() => {
        computerCard0.classList.add("computer-card-battle-start-lane-0")
        computerCard1.classList.add("computer-card-battle-start-lane-3")
        computerCard2.classList.add("computer-card-battle-start-lane-2")
        computerCard3.classList.add("computer-card-battle-start-lane-1")
        
        computerBox0.appendChild(computerCard0)
        computerBox1.appendChild(computerCard3)
        computerBox2.appendChild(computerCard2)
        computerBox3.appendChild(computerCard1)

    },1500);

    setTimeout(() => {
        document.body.removeChild(square)
        overlay.classList.add("overlay-text-gone")
        overlay.innerHTML = ""
    },2450);
    
    battlePhase()
}

function battlePhase() {
    console.log(playerHand)
    console.log(computerHand)
}