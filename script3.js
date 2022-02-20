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
