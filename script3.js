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




function deckFlip() {
    if (!roundStarted){
        playerCard0.classList.toggle("flip-player-card0")
        computerCard0.classList.toggle("flip-computer-card0")
        playerCardSlot.appendChild(playerCard1)

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
        },1300);
        
        playerCard0.classList.add("flippedPlayerCard")
        playerCard1.classList.add("flippedPlayerCard")
        playerCard2.classList.add("flippedPlayerCard")
        playerCard3.classList.add("flippedPlayerCard")

        roundStarted = true

        startPhase()
    }
}