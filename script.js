import Deck from "./deck.js"

const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")

var playerBox0 = document.querySelector(".playerBox0")
var playerBox1 = document.querySelector(".playerBox1")
var playerBox2 = document.querySelector(".playerBox2")
var playerBox3 = document.querySelector(".playerBox3")
var computerBox0 = document.querySelector(".computerBox0") 
var computerBox1 = document.querySelector(".computerBox1")
var computerBox2 = document.querySelector(".computerBox2")
var computerBox3 = document.querySelector(".computerBox3")

var wholeDeck;
var playerDeck, computerDeck;
var playerCard0, playerCard1, playerCard2, playerCard3, computerCard0, computerCard1, computerCard2, computerCard3;
var playerHand = [], computerHand = [];
var roundStarted;
var playerBoxes;
var draggable;
var card_lane_map;
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

    playerCard0 = createCard(playerDeck, "playerD")
    playerCard1 = createCard(playerDeck, "playerD")
    playerCard2 = createCard(playerDeck, "playerD")
    playerCard3 = createCard(playerDeck, "playerD")

    playerCard0.classList.add('playerCard')
    playerCard1.classList.add('playerCard')
    playerCard2.classList.add('playerCard')
    playerCard3.classList.add('playerCard')

    computerCard0 = createCard(computerDeck, "computerD")
    computerCard1 = createCard(computerDeck, "computerD")
    computerCard2 = createCard(computerDeck, "computerD")
    computerCard3 = createCard(computerDeck, "computerD")

    computerCard0.classList.add('computerCard')
    computerCard1.classList.add('computerCard')
    computerCard2.classList.add('computerCard')
    computerCard3.classList.add('computerCard')

    playerCardSlot.appendChild(playerCard0)
    computerCardSlot.appendChild(computerCard0)
}

document.getElementById('button').onclick = function() {
    deckFlip()
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

function createCard(deck, deckId) {
    var cardImg = document.createElement('IMG')
    var cardText = document.createElement('h1')
    var innerCardDiv = document.createElement('div')
    var innerInnerCardDiv = document.createElement('div')
    var innerInnerCardDiv2 = document.createElement('div')

    innerCardDiv.classList.add("card")
    innerInnerCardDiv2.classList.add("back")   
    
    var currentCard = deck.pop()
    innerCardDiv.id = currentCard.name
    var currentCardImg = currentCard.image
    cardImg.setAttribute("src", currentCardImg); 
    cardImg.classList.add("front")

    cardText.innerText = "Beast Battle"
    
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
        computerCard0.classList.toggle("flip-computer-card0")
        playerCardSlot.appendChild(playerCard1)
        computerCardSlot.appendChild(computerCard1)

        setTimeout(() => {
            playerCard1.classList.toggle("flip-player-card1")
            computerCard1.classList.toggle("flip-computer-card1")
        },300);
        setTimeout(() => {
           playerCardSlot.appendChild(playerCard2)
           computerCardSlot.appendChild(computerCard2)
        },750);
        setTimeout(() => {
            playerCard2.classList.toggle("flip-player-card2")
            computerCard2.classList.toggle("flip-computer-card2")
        },800);
        setTimeout(() => {
           playerCardSlot.appendChild(playerCard3)
           computerCardSlot.appendChild(computerCard3)
        },1250);
        setTimeout(() => {
            playerCard3.classList.toggle("flip-player-card3")
            computerCard3.classList.toggle("flip-computer-card3")
            var cards = Array.from(document.getElementsByClassName("card"))
            cards.forEach(card => {
                card.addEventListener("dragstart", () => {
                    card.classList.add("zoomCard")
                });
            });
        },1300);      
        
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
    
    setTimeout(() => {
        var draggables = document.querySelectorAll('.playerCard')
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
    },1250);
    
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
        var draggableElements = [...box.querySelectorAll('.playerCard:not(.dragging)')]
 
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

    card_lane_map = {
        "computerBox0" : computerCard0,
        "computerBox1" : computerCard3,
        "computerBox2" : computerCard2,
        "computerBox3" : computerCard3
    }
    
    battlePhase()
}

function battlePhase() {

    var frightFactorPlayerCard = playerBox0.getElementsByClassName("card")[0].id
    var magicLevelPlayerCard = playerBox1.getElementsByClassName("card")[0].id
    var powerPlayerCard = playerBox2.getElementsByClassName("card")[0].id
    var agePlayerCard = playerBox3.getElementsByClassName("card")[0].id

    var frightFactorComputerCard = card_lane_map["computerBox0"].id
    var magicLevelComputerCard = card_lane_map["computerBox1"].id
    var powerComputerCard = card_lane_map["computerBox2"].id
    var ageComputerCard = card_lane_map["computerBox3"].id

    for (var i = 0; i < playerHand.length; i++) {
        if (frightFactorPlayerCard == playerHand[i].name) {
            var playerFrightFactor = playerHand[i].frightFactor
        }
        if (magicLevelPlayerCard == playerHand[i].name) {
            var playerMagicLevel = playerHand[i].magicLevel
        }
        if (powerPlayerCard == playerHand[i].name) {
            var playerPower = playerHand[i].power
        }
        if (agePlayerCard == playerHand[i].name) {
            var playerAge = playerHand[i].age
        }
        if (frightFactorComputerCard == computerHand[i].name) {
            var computerFrightFactor = computerHand[i].frightFactor
        }
        if (magicLevelComputerCard == computerHand[i].name) {
            var computerMagicLevel = computerHand[i].magicLevel
        }
        if (powerComputerCard == computerHand[i].name) {
            var computerPower = computerHand[i].power
        }
        if (ageComputerCard == computerHand[i].name) {
            var playerAge = computerHand[i].age
        }
    }

    if (playerFrightFactor > computerFrightFactor) {
        console.log("player wins")
    } else if (playerFrightFactor < computerFrightFactor) {
        console.log("computer wins")
    } else {
        console.log("draw")
    }

}