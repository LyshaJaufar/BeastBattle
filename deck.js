const NAME = ["Plexor", "Tauron", "Soltra", "Trema", "Claw" , "Flaymar", "Vipero", "Trillion","Koron", "Xerik", "Elko"]
const AGE = [253, 0, 487, 406, 465, 0, 397, 303, 389, 320, 0]
const POWER = [195, 296, 196, 178, 217, 293, 272, 202, 270, 235, 286]
const MAGICLEVEL = [201, 155, 184, 178, 134, 190, 123, 193, 167, 149, 194]
const FRIGHTFACTOR = [85, 88, 72, 95, 68, 91, 75, 85, 94, 94, 91]

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
      
        this.image = document.createElement("IMG"); 
        this.image.setAttribute("src", image); 
        this.image.setAttribute("width", "228"); 
        document.body.appendChild(this.image); 

    }

    get color() {
        return this.suit === "♠" || this.suit === "♣" ? 'black' : 'red'
    }

    getHTML() {
        const cardDiv = document.createElement('div')
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv
    }
    
}
 
// A brand new deck of cards with all 52 cards, one for each suit and value combination
function freshDeck() {
    return [
        new Card("Plexor", 253, 195, 201, 85, "torpixtest.png"),
        new Card("Tauron", 0, 296, 155, 88),
        new Card("Soltra", 487, 196, 184, 72),
        new Card("Trema", 406, 178, 178, 95),
        new Card("Claw", 465, 217, 134, 68),
        new Card("Flaymar", 0, 293, 190, 91),
        new Card("Vipero", 397, 272, 123, 75),
        new Card("Trillion", 303, 202, 193, 85),
        new Card("Koron", 389, 270, 167, 94),
        new Card("Xerik", 320, 235, 149, 94),
        new Card("Elko", 0, 286, 194, 91)
    ]
}