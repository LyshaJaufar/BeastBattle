export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    pop() {
        return this.cards.shift()
    }

    push(card) {
        this.cards.push(card)
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(name, age, power, magicLevel, frightFactor, image) {
        this.name = name
        this.age = age
        this.power = power
        this.magicLevel = magicLevel
        this.frightFactor = frightFactor

        this.image = image
    }
}
 
// A brand new deck of cards with all 52 cards, one for each suit and value combination
function freshDeck() {
    return [
        new Card("Ferno", 288, 212, 180, 91, "assets/ferno.png"),
        new Card("Vipero", 397, 272, 123, 75, "assets/vipero.png"),
        new Card("Soltra", 487, 196, 184, 72, "assets/soltra.png"),
        new Card("Epos", 457, 243, 192, 92, "assets/epos.png"),
        new Card("Plexor", 253, 195, 201, 85, "torpix2.png"),
        new Card("Tauron", 0, 296, 155, 88, "torpixtest.png"),
        new Card("Trema", 406, 178, 178, 95),
        new Card("Elko", 0, 286, 194, 91, "assets/elko.png"),
        new Card("Brutus", 0, 285, 189, 90, "assets/brutus.png"),
        new Card("Claw", 465, 217, 134, 68),
        new Card("Flaymar", 0, 293, 190, 91),
        new Card("Trillion", 303, 202, 193, 85),
        new Card("Koron", 389, 270, 167, 94),
        new Card("Xerik", 320, 235, 149, 94)
    ]
}
