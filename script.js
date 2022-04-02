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
var playerDeck, computerDeck, playerDeck1, computerDeck1;
var playerCard0, playerCard1, playerCard2, playerCard3, computerCard0, computerCard1, computerCard2, computerCard3;
var playerCard4, computerCard4;
var playerHand = [], computerHand = [];
var roundStarted;
var playerBoxes;
var draggable;
var card_lane_map;
var i;
var overlay;
var battlePhaseStarted;
var playerPoints, computerPoints;
var nextPlayerCard, nextComputerCard;
var firstRound = true;


startGame()
function startGame() {
    setupGame()
}

function setupGame() {
    if (firstRound) {
        wholeDeck = new Deck()
        //deck.shuffle()
        const deckMidpoint = Math.ceil(wholeDeck.numberOfCards / 2)
        playerDeck = new Deck(wholeDeck.cards.slice(0, deckMidpoint))
        computerDeck = new Deck(wholeDeck.cards.slice(deckMidpoint, wholeDeck.numberOfCards))

        playerDeck1 = new Deck(wholeDeck.cards.slice(0, deckMidpoint))
        computerDeck1 = new Deck(wholeDeck.cards.slice(deckMidpoint, wholeDeck.numberOfCards))
    } else {
        playerDeck.shuffle()
        computerDeck.shuffle()
    }

    playerPoints = 0, computerPoints = 0;
    i = 0
    roundStarted = false
    battlePhaseStarted = true

    playerCard0 = createCard(playerDeck, "playerD")
    playerCard1 = createCard(playerDeck, "playerD")
    playerCard2 = createCard(playerDeck, "playerD")
    playerCard3 = createCard(playerDeck, "playerD")
    playerCard4 = createCard(playerDeck, "playerNC")

    playerCard0.classList.add('playerCard')
    playerCard1.classList.add('playerCard')
    playerCard2.classList.add('playerCard')
    playerCard3.classList.add('playerCard')
    playerCard4.classList.add("next-card")

    i = 0
    computerCard0 = createCard(computerDeck, "computerD")
    computerCard1 = createCard(computerDeck, "computerD")
    computerCard2 = createCard(computerDeck, "computerD")
    computerCard3 = createCard(computerDeck, "computerD")
    computerCard4 = createCard(computerDeck, "computerNC")

    computerCard0.classList.add('computerCard')
    computerCard1.classList.add('computerCard')
    computerCard2.classList.add('computerCard')
    computerCard3.classList.add('computerCard')
    computerCard4.classList.add("next-card")

    playerCardSlot.appendChild(playerCard0)
    computerCardSlot.appendChild(computerCard0)
}

document.getElementById('button').onclick = function() {
    firstRound = false
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
        computerHand[i] = currentCard
    }
    if (deckId == "playerNC") {
        nextPlayerCard = currentCard
    }
    if (deckId == "computerNC") {
        nextComputerCard = currentCard
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
        setTimeout(() => {
            playerCardSlot.appendChild(playerCard4)
            computerCardSlot.appendChild(computerCard4)
        },1750);   

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

    var ageClicked = false, powerClicked = false, magicLevelClicked = false, frightFactorClicked = false;
    let img_src =
	"data:image/gif;base64,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";
    let img = document.createElement("img");
    img.classList.add("explosion-img")

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


    for (var i = 0; i < computerHand.length; i++) {

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

    playerBox3.addEventListener('click', () => {

        if (!ageClicked) {
            ageClicked = true
            if (playerAge > computerAge) {
                playerPoints++;

                document.getElementById(agePlayerCard).classList.toggle("battle-win-playercard")
                document.getElementById(ageComputerCard).classList.toggle("battle-lose-computerCard")   
                computerBox3.getElementsByClassName("card")[0].appendChild(img)
                setTimeout(() => {
                    createImage()
                }, 1400);
                setTimeout(() => {
                    document.getElementById(ageComputerCard).classList.toggle("battle-lose") 
                }, 1650); 
                
            } else if (computerAge > playerAge) {
                computerPoints++;

                document.getElementById(agePlayerCard).classList.toggle("battle-lose-playercard")
                document.getElementById(ageComputerCard).classList.toggle("battle-win-computerCard")
                playerBox3.getElementsByClassName("card")[0].appendChild(img)
                setTimeout(() => {
                    createImage()
                }, 1400);
                setTimeout(() => {
                    document.getElementById(agePlayerCard).classList.toggle("battle-lose") 
                }, 1650); 
            } else {
                document.getElementById(agePlayerCard).classList.toggle("battle-draw-playercard")
                document.getElementById(ageComputerCard).classList.toggle("battle-draw-computerCard")
            }
        }
    }),

    playerBox2.addEventListener('click', () => {
        if (!powerClicked && ageClicked == true) {
            powerClicked = true
            if (playerPower > computerPower) {
                playerPoints++;

                document.getElementById(powerPlayerCard).classList.toggle("battle-win-playercard")
                document.getElementById(powerComputerCard).classList.toggle("battle-lose-computerCard")   
                computerBox2.getElementsByClassName("card")[0].appendChild(img)
                setTimeout(() => {
                    createImage()
                }, 1400);
                setTimeout(() => {
                    document.getElementById(powerComputerCard).classList.toggle("battle-lose") 
                }, 1650); 
                
            } else if (computerPower > playerPower) {
                computerPoints++;
                
                document.getElementById(powerPlayerCard).classList.toggle("battle-lose-playercard")
                document.getElementById(powerComputerCard).classList.toggle("battle-win-computerCard")
                playerBox2.getElementsByClassName("card")[0].appendChild(img)
                setTimeout(() => {
                    createImage()
                }, 1400);
                setTimeout(() => {
                    document.getElementById(powerPlayerCard).classList.toggle("battle-lose") 
                }, 1650); 
            } else {
                document.getElementById(powerPlayerCard).classList.toggle("battle-draw-playercard")
                document.getElementById(powerComputerCard).classList.toggle("battle-draw-computerCard")
            }
        }
    }),
    
    playerBox1.addEventListener('click', () => {
        if (!magicLevelClicked && powerClicked == true) {
            magicLevelClicked = true
            if (playerMagicLevel > computerMagicLevel) {
                playerPoints++;

                document.getElementById(magicLevelPlayerCard).classList.toggle("battle-win-playercard")
                document.getElementById(magicLevelComputerCard).classList.toggle("battle-lose-computerCard")   
                computerBox1.getElementsByClassName("card")[0].appendChild(img)
                setTimeout(() => {
                    createImage()
                }, 1400);
                setTimeout(() => {
                    document.getElementById(magicLevelComputerCard).classList.toggle("battle-lose") 
                }, 1650); 
                
            } else if (computerMagicLevel > playerMagicLevel) {
                computerPoints++;

                document.getElementById(magicLevelPlayerCard).classList.toggle("battle-lose-playercard")
                document.getElementById(magicLevelComputerCard).classList.toggle("battle-win-computerCard")
                playerBox1.getElementsByClassName("card")[0].appendChild(img)
                setTimeout(() => {
                    createImage()
                }, 1400);
                setTimeout(() => {
                    document.getElementById(magicLevelPlayerCard).classList.toggle("battle-lose") 
                }, 1650); 
            } else {
                document.getElementById(magicLevelPlayerCard).classList.toggle("battle-draw-playercard")
                document.getElementById(magicLevelComputerCard).classList.toggle("battle-draw-computerCard")
            }
        }
    });

    playerBox0.addEventListener('click', () => {
        if (!frightFactorClicked && magicLevelClicked == true) {
            frightFactorClicked = true
            if (playerFrightFactor > computerFrightFactor) {
                playerPoints++;

                document.getElementById(frightFactorPlayerCard).classList.toggle("battle-win-playercard")
                document.getElementById(frightFactorComputerCard).classList.toggle("battle-lose-computerCard")   
                computerBox0.getElementsByClassName("card")[0].appendChild(img)
                setTimeout(() => {
                    createImage()
                }, 1400);
                setTimeout(() => {
                    document.getElementById(frightFactorComputerCard).classList.toggle("battle-lose") 
                }, 1650); 
                
            } else if (computerFrightFactor > playerFrightFactor) {
                computerPoints++;

                document.getElementById(frightFactorPlayerCard).classList.toggle("battle-lose-playercard")
                document.getElementById(frightFactorComputerCard).classList.toggle("battle-win-computerCard")
                playerBox0.getElementsByClassName("card")[0].appendChild(img)
                setTimeout(() => {
                    createImage()
                }, 1400);
                setTimeout(() => {
                    document.getElementById(frightFactorPlayerCard).classList.toggle("battle-lose") 
                }, 1650); 
            } else {
                document.getElementById(frightFactorPlayerCard).classList.toggle("battle-draw-playercard")
                document.getElementById(frightFactorComputerCard).classList.toggle("battle-draw-computerCard")
            }
            setTimeout(() => {
                updateDeck()
            }, 4000)
        }
    });

    const createImage = () => {
        img.style.opacity = 1;
        img.src = img_src;
        setTimeout(() => {
            img.style.opacity = 0;
        }, 820);
    };
}

function updateDeck() {

    var compHBar = document.querySelector(".comp-health-bar")
    var playerHBar = document.querySelector(".player-health-bar")
    var pBar = playerHBar.querySelector(".bar")      
    var pHit = playerHBar.querySelector(".hit")
    var cBar = compHBar.querySelector(".bar")      
    var cHit = compHBar.querySelector(".hit")

    var computerText = compHBar.querySelector(".textHP")
    var playerText = playerHBar.querySelector(".textHPplayer")

    var computerTotal = compHBar.getAttribute("data-total")
    var computerValue = compHBar.getAttribute("data-value")

    var playerTotal = playerHBar.getAttribute("data-total")
    var playerValue = playerHBar.getAttribute("data-value")    

    // Player Wins    
    if (playerPoints > computerPoints)
    {
        for (var i = 0; i < computerHand.length; i++) {
            playerHand[4 + i] = computerHand[i]
        }
        for (var i = 0; i < computerHand.length; i++) {
            for (var j = 0; j < computerDeck1.cards.length; j++) {
                if (computerHand[i].name == computerDeck1.cards[j].name) {
                    computerDeck1.splice(j, 1)
                }
            }
        }
        computerHand.splice(0, 4)

        for (var i = 0; i < playerHand.length; i++) {
            playerDeck.push(playerHand[i])
            playerDeck1.push(playerHand[i])
        }    
                                                                                           
        playerHand.splice(0, 8) 
        if (computerDeck.numberOfCards != 0) {
            setTimeout(() => {
                cleanUpBeforeRoundWin()
            }, 50)
        } else {
            playerWin() 
        }

        var damage = 400;
        var newValue = computerValue - damage;

        var barWidth = (newValue / computerTotal) * 100
        var hitWidth = (damage / computerValue) * 100 + "%"

        cHit.style.width = hitWidth
        compHBar.setAttribute("data-value", newValue)

        setTimeout(function(){
            cHit.style.width = 0;
            cBar.style.width = barWidth + "%"
        })

        playerText.innerHTML = `PLAYER ${playerDeck.numberOfCards}`
        computerText.innerHTML = `COMPUTER ${computerDeck.numberOfCards}`

        // Not first round
        if (playerValue != playerTotal) {

            var playerVal = parseInt(playerValue)

            var barWidthP = ((playerVal + 400) / playerTotal) * 100
            var hitWidthP = (damage / playerValue) * 100 + "%"

            pHit.style.width = hitWidthP
            playerHBar.setAttribute("data-value", (playerVal + 400).toString())

            setTimeout(function(){
                pHit.style.width = 0;
                pBar.style.width = barWidthP + "%"
            })
        }

        // Update player and computer values
        playerValue = parseInt(playerValue) + 400
        playerHBar.setAttribute("data-value", playerValue.toString())
        compHBar.setAttribute("data-value", newValue.toString())
    }

    // Computer Wins
    else if (computerPoints > playerPoints) {
 
        for (var i = 0; i < playerHand.length; i++) {
            computerHand[4 + i] = playerHand[i]
        }
        for (var i = 0; i < playerHand.length; i++) {
            for (var j = 0; j < playerDeck1.cards.length; j++) {
                if (playerHand[i].name == playerDeck1.cards[j].name) {
                    playerDeck1.splice(j, 1)
                }
            }
        }
        playerHand.splice(0, 4)

        for (var i = 0; i < computerHand.length; i++) {
            computerDeck.push(computerHand[i])
            computerDeck1.push(computerHand[i])
        }  
        computerHand.splice(0, 8) 
        if (playerDeck.numberOfCards != 0) {
            setTimeout(() => {
                cleanUpBeforeRoundLose()
            }, 50)        
        } else {
            playerLose()
        }

        var damage = 400;
        var newValue = playerValue - damage;
 
        var barWidth = (newValue / playerTotal) * 100
        var hitWidth = (damage / playerValue) * 100 + "%"

        pHit.style.width = hitWidth
        playerHBar.setAttribute("data-value", newValue)

        setTimeout(function(){
            pHit.style.width = 0;
            pBar.style.width = barWidth + "%"
        })

        playerText.innerHTML = `PLAYER ${playerDeck.numberOfCards}`
        computerText.innerHTML = `COMPUTER ${computerDeck.numberOfCards}`

        if (computerValue != computerTotal) {
            var compVal = parseInt(computerValue)

            var barWidthC = ((compVal + 400) / computerTotal) * 100
            var hitWidthC = (damage / compVal) * 100 + "%"

            cHit.style.width = hitWidthC
            compHBar.setAttribute("data-value", (compVal+400).toString())

            setTimeout(function(){
                cHit.style.width = 0;
                cBar.style.width = barWidthC + "%"
            })
        }

        // Update computer & player values
        computerValue = parseInt(computerValue) + 400
        compHBar.setAttribute("data-value", computerValue.toString())
        playerHBar.setAttribute("data-value", newValue.toString())

    } 
    // Tie
    else {

        for (var i = 0; i < playerHand.length; i++) {
            playerDeck.push(playerHand[i])
            computerDeck.push(computerHand[i])
        }    
        computerHand.splice(0, 4)                                                                                           
        playerHand.splice(0, 4) 
        console.log(playerDeck, playerDeck1, computerDeck, computerDeck1)

        setTimeout(() => {
            cleanUpBeforeRoundTie()
        }, 50)        
    }

    if (playerDeck.numberOfCards != 0 && computerDeck.numberOfCards != 0) {
        playerCard4.classList.remove("next-card")
        computerCard4.classList.remove("next-card")

        playerCard4.classList.add("playerCard")
        computerCard4.classList.add("computerCard")
            
        playerDeck.push(nextPlayerCard)
        computerDeck.push(nextComputerCard)

        computerCardSlot.removeChild(computerCardSlot.getElementsByClassName("card")[0])
        playerCardSlot.removeChild(playerCardSlot.getElementsByClassName("card")[0])
        
        setupGame()
    }
}

function cleanUpBeforeRoundWin() {

    let img_src = "assets/poof.gif"
    let img = document.createElement("img");
    img.classList.add("explosion-img")

    const createImage = () => {
        img.style.opacity = 1;
        img.src = img_src;
        setTimeout(() => {
            img.style.opacity = 0;
        }, 1020);
    };

    playerBox0.getElementsByClassName("card")[0].classList.toggle("clean-deck-p0")
    playerBox1.getElementsByClassName("card")[0].classList.toggle("clean-deck-p1")
    playerBox2.getElementsByClassName("card")[0].classList.toggle("clean-deck-p2")
    playerBox3.getElementsByClassName("card")[0].classList.toggle("clean-deck-p3")

    computerBox0.getElementsByClassName("card")[0].classList.toggle("clean-deck-c0")
    computerBox1.getElementsByClassName("card")[0].classList.toggle("clean-deck-c1")  
    computerBox2.getElementsByClassName("card")[0].classList.toggle("clean-deck-c2")
    computerBox3.getElementsByClassName("card")[0].classList.toggle("clean-deck-c3")

    playerCardSlot.getElementsByClassName("card")[0].appendChild(img)

    setTimeout(() => {
        createImage()
    }, 3250);
    setTimeout(() => {
        playerBox0.removeChild(playerBox0.getElementsByClassName("card")[0])
        playerBox1.removeChild(playerBox1.getElementsByClassName("card")[0])
        playerBox2.removeChild(playerBox2.getElementsByClassName("card")[0])
        playerBox3.removeChild(playerBox3.getElementsByClassName("card")[0])

        computerBox0.removeChild(computerBox0.getElementsByClassName("card")[0])
        computerBox1.removeChild(computerBox1.getElementsByClassName("card")[0])
        computerBox2.removeChild(computerBox2.getElementsByClassName("card")[0])
        computerBox3.removeChild(computerBox3.getElementsByClassName("card")[0])
    }, 3450);

}

function cleanUpBeforeRoundLose() {
 
    let img_src = "assets/poof.gif"
    let img = document.createElement("img");
    img.classList.add("explosion-img")

    const createImage = () => {
        img.style.opacity = 1;
        img.src = img_src;
        setTimeout(() => {
            img.style.opacity = 0;
        }, 1020);
    };

    playerBox0.getElementsByClassName("card")[0].classList.toggle("lose-clean-deck-p0")
    playerBox1.getElementsByClassName("card")[0].classList.toggle("lose-clean-deck-p1")
    playerBox2.getElementsByClassName("card")[0].classList.toggle("lose-clean-deck-p2")
    playerBox3.getElementsByClassName("card")[0].classList.toggle("lose-clean-deck-p3")

    computerBox0.getElementsByClassName("card")[0].classList.toggle("lose-clean-deck-c0")
    computerBox1.getElementsByClassName("card")[0].classList.toggle("lose-clean-deck-c1")  
    computerBox2.getElementsByClassName("card")[0].classList.toggle("lose-clean-deck-c2")
    computerBox3.getElementsByClassName("card")[0].classList.toggle("lose-clean-deck-c3")

    computerCardSlot.getElementsByClassName("card")[0].appendChild(img)

    setTimeout(() => {
        createImage()
    }, 3300);
    setTimeout(() => {
        playerBox0.removeChild(playerBox0.getElementsByClassName("card")[0])
        playerBox1.removeChild(playerBox1.getElementsByClassName("card")[0])
        playerBox2.removeChild(playerBox2.getElementsByClassName("card")[0])
        playerBox3.removeChild(playerBox3.getElementsByClassName("card")[0])

        computerBox0.removeChild(computerBox0.getElementsByClassName("card")[0])
        computerBox1.removeChild(computerBox1.getElementsByClassName("card")[0])
        computerBox2.removeChild(computerBox2.getElementsByClassName("card")[0])
        computerBox3.removeChild(computerBox3.getElementsByClassName("card")[0])
    }, 3450);

}

function cleanUpBeforeRoundTie() {
 
    let img_src = "assets/poof.gif"
    let img = document.createElement("img");
    let img1 = document.createElement("img");
    img.classList.add("explosion-img")
    img1.classList.add("explosion-img")

    const createImage = () => {
        img.style.opacity = 1;
        img.src = img_src;

        img1.style.opacity = 1;
        img1.src = img_src;
        setTimeout(() => {
            img.style.opacity = 0;
            img1.style.opacity = 0;
        }, 1020);
    };

    playerBox0.getElementsByClassName("card")[0].classList.toggle("clean-deck-p0")
    playerBox1.getElementsByClassName("card")[0].classList.toggle("clean-deck-p1")
    playerBox2.getElementsByClassName("card")[0].classList.toggle("clean-deck-p2")
    playerBox3.getElementsByClassName("card")[0].classList.toggle("clean-deck-p3")

    computerBox0.getElementsByClassName("card")[0].classList.toggle("lose-clean-deck-c0")
    computerBox1.getElementsByClassName("card")[0].classList.toggle("lose-clean-deck-c1")  
    computerBox2.getElementsByClassName("card")[0].classList.toggle("lose-clean-deck-c2")
    computerBox3.getElementsByClassName("card")[0].classList.toggle("lose-clean-deck-c3")

    playerCardSlot.getElementsByClassName("card")[0].appendChild(img)
    computerCardSlot.getElementsByClassName("card")[0].appendChild(img1)
    setTimeout(() => {
        createImage()
    }, 3300);

    setTimeout(() => {
        playerBox0.removeChild(playerBox0.getElementsByClassName("card")[0])
        playerBox1.removeChild(playerBox1.getElementsByClassName("card")[0])
        playerBox2.removeChild(playerBox2.getElementsByClassName("card")[0])
        playerBox3.removeChild(playerBox3.getElementsByClassName("card")[0])

        computerBox0.removeChild(computerBox0.getElementsByClassName("card")[0])
        computerBox1.removeChild(computerBox1.getElementsByClassName("card")[0])
        computerBox2.removeChild(computerBox2.getElementsByClassName("card")[0])
        computerBox3.removeChild(computerBox3.getElementsByClassName("card")[0])
    }, 3450);

}


function playerLose() {
    console.log("you lose")
}

function playerWin() {
    console.log("you win")
}