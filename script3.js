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
var overlay;
var battlePhaseStarted = true

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
        
        // hover effect
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

    if (battlePhaseStarted) {
        battlePhaseStarted = false

        overlay = document.createElement("DIV")
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
            "computerBox3" : computerCard1
        }
        
        battlePhase()
    }
}

function battlePhase() {

    var container;

    // remove hover effect
    playerCard0.classList.remove("flippedPlayerCard")
    playerCard1.classList.remove("flippedPlayerCard")
    playerCard2.classList.remove("flippedPlayerCard")
    playerCard3.classList.remove("flippedPlayerCard")

    setTimeout(() => {
        document.body.removeChild(overlay)
    }, 4500)
    
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
            var computerAge = computerHand[i].age
        }
    }

    if (playerFrightFactor > computerFrightFactor) {
        console.log("player wins")
    } else if (playerFrightFactor < computerFrightFactor) {
        console.log("computer wins")
    } else {
        console.log("draw")
    }

    playerBox3.addEventListener('click', () => {

        if (playerAge > computerAge) {
            document.getElementById(agePlayerCard).classList.toggle("battle-win-playercard3")
            document.getElementById(ageComputerCard).classList.toggle("battle-lose-computerCard3")   
            container = document.querySelector(".maincontainer")
            console.log(container)
            container.appendChild(img)
            createImage()
        } else if (computerAge > playerAge) {
            document.getElementById(agePlayerCard).classList.toggle("battle-lose-playercard3")
            document.getElementById(ageComputerCard).classList.toggle("battle-win-computerCard3")
            console.log(playerAge, computerAge)
        } else {
            document.getElementById(agePlayerCard).classList.toggle("battle-draw-playercard0")
            document.getElementById(ageComputerCard).classList.toggle("battle-draw-computerCard3")
        }
    });
   
}



let container = document.querySelector("#container");
console.log(container)
container.addEventListener("click", e => {
    console.log(e)
	createImage(e);
});

let img_src =
	"data:image/gif;base64,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";
let img = document.createElement("img");
container.appendChild(img);


let onScreen = false;

const createImage = e => {
	if (onScreen) return;
	img.style.display = "block"; 	//  sometimes resets the playing animation - GIFs are cached in a shady place.
	img.style.opacity = 1;
	img.style.bottom = e.pageY + "px";
	img.style.left = e.pageX + "px";
    console.log(e.pageX)
	img.src = img_src;
	onScreen = true;
	setTimeout(() => {
		reloadAnimation();
		img.style.opacity = 0;
	}, 820);
};

const reloadAnimation = () => {
	setTimeout(() => {
		onScreen = false;
		reloadAnimation();
	}, 33);
};