import Deck from "./deck.js"

var deck = new Deck()
var age = [], power = [], magicLevel = [], frightFactor = []

var sorted = false
var cards

for (var i = 0; i < deck.numberOfCards; i++) {
    age[i]= deck.cards[i].age
    power[i]= deck.cards[i].power
    magicLevel[i]= deck.cards[i].magicLevel
    frightFactor[i]= deck.cards[i].frightFactor
}
age.sort()
power.sort()
magicLevel.sort()
frightFactor.sort()

age.reverse()
power.reverse()
magicLevel.reverse()
frightFactor.reverse()

var ageNames = [], powerNames = [], magicLevelNames = [], frightFactorNames = []

for (var i = 0; i < deck.numberOfCards; i++) {
    for (var j = 0; j < deck.numberOfCards; j++) {
        if (age[i] == deck.cards[j].age) {
            if (!ageNames.includes(deck.cards[j].name)){
                ageNames[i] = deck.cards[j].name
            } 
        }
        if (power[i] == deck.cards[j].power) {
            if (!powerNames.includes(deck.cards[j].name)){
                powerNames[i] = deck.cards[j].name
            } 
        }
        if (magicLevel[i] == deck.cards[j].magicLevel) {
            if (!magicLevelNames.includes(deck.cards[j].name)){
                magicLevelNames[i] = deck.cards[j].name
            } 
        }
        if (frightFactor[i] == deck.cards[j].frightFactor) {
            if (!frightFactorNames.includes(deck.cards[j].name)){
                frightFactorNames[i] = deck.cards[j].name
            } 
        }
    }
}

var id = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "nineth"]
var cardId = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

var counter = 0
for (var i = 0; i < 9; i++) {

    var div = document.createElement("div")
    var divImg1 = document.createElement("img")
    var divImg2 = document.createElement("img")

    div.classList.add("slot")
    divImg1.classList.add("card")
    divImg2.classList.add("card")
    div.id = id[i]

    divImg1.setAttribute("src", `assets/${ageNames[counter].toLowerCase()}.png`)
    divImg1.id = cardId[counter]
    counter += 1
    divImg2.setAttribute("src", `assets/${ageNames[counter].toLowerCase()}.png`)
    divImg2.id = cardId[counter]
    counter += 1

    div.appendChild(divImg1)
    div.append(divImg2)

    document.getElementById("row").appendChild(div)
}


// SORTING
// Age
document.getElementById("age").onclick = function() {

    sorted = true

    document.getElementById("row").removeChild(document.getElementById("first"))
    document.getElementById("row").removeChild(document.getElementById("second"))
    document.getElementById("row").removeChild(document.getElementById("third"))
    document.getElementById("row").removeChild(document.getElementById("fourth"))
    document.getElementById("row").removeChild(document.getElementById("fifth"))
    document.getElementById("row").removeChild(document.getElementById("sixth"))
    document.getElementById("row").removeChild(document.getElementById("seventh"))
    document.getElementById("row").removeChild(document.getElementById("eighth"))
    document.getElementById("row").removeChild(document.getElementById("nineth"))


    var counter = 0
    for (var i = 0; i < 9; i++) {

        var div = document.createElement("div")
        var divImg1 = document.createElement("img")
        var divImg2 = document.createElement("img")

        div.classList.add("slot")
        divImg1.classList.add("card")
        divImg2.classList.add("card")
        div.id = id[i]

        divImg1.setAttribute("src", `assets/${ageNames[counter].toLowerCase()}.png`)
        divImg1.id = cardId[counter]
        counter += 1
        divImg2.setAttribute("src", `assets/${ageNames[counter].toLowerCase()}.png`)
        divImg2.id = cardId[counter]
        counter += 1

        div.appendChild(divImg1)
        div.append(divImg2)

        document.getElementById("row").appendChild(div)
    }
    cards = Array.from(document.getElementsByClassName("card"))
    cardZoom()
};

// Power
document.getElementById("power").onclick = function() {

    sorted = true

    document.getElementById("row").removeChild(document.getElementById("first"))
    document.getElementById("row").removeChild(document.getElementById("second"))
    document.getElementById("row").removeChild(document.getElementById("third"))
    document.getElementById("row").removeChild(document.getElementById("fourth"))
    document.getElementById("row").removeChild(document.getElementById("fifth"))
    document.getElementById("row").removeChild(document.getElementById("sixth"))
    document.getElementById("row").removeChild(document.getElementById("seventh"))
    document.getElementById("row").removeChild(document.getElementById("eighth"))
    document.getElementById("row").removeChild(document.getElementById("nineth"))


    var counter = 0
    for (var i = 0; i < 9; i++) {

        var div = document.createElement("div")
        var divImg1 = document.createElement("img")
        var divImg2 = document.createElement("img")

        div.classList.add("slot")
        divImg1.classList.add("card")
        divImg2.classList.add("card")
        div.id = id[i]

        divImg1.setAttribute("src", `assets/${powerNames[counter].toLowerCase()}.png`)
        divImg1.id = cardId[counter]
        counter += 1
        divImg2.setAttribute("src", `assets/${powerNames[counter].toLowerCase()}.png`)
        divImg2.id = cardId[counter]
        counter += 1

        div.appendChild(divImg1)
        div.append(divImg2)

        document.getElementById("row").appendChild(div)
    }
    cards = Array.from(document.getElementsByClassName("card"))
    cardZoom()
};

// Magic Level
document.getElementById("magic-level").onclick = function() {

    sorted = true

    document.getElementById("row").removeChild(document.getElementById("first"))
    document.getElementById("row").removeChild(document.getElementById("second"))
    document.getElementById("row").removeChild(document.getElementById("third"))
    document.getElementById("row").removeChild(document.getElementById("fourth"))
    document.getElementById("row").removeChild(document.getElementById("fifth"))
    document.getElementById("row").removeChild(document.getElementById("sixth"))
    document.getElementById("row").removeChild(document.getElementById("seventh"))
    document.getElementById("row").removeChild(document.getElementById("eighth"))
    document.getElementById("row").removeChild(document.getElementById("nineth"))


    var counter = 0
    for (var i = 0; i < 9; i++) {

        var div = document.createElement("div")
        var divImg1 = document.createElement("img")
        var divImg2 = document.createElement("img")

        div.classList.add("slot")
        divImg1.classList.add("card")
        divImg2.classList.add("card")
        div.id = id[i]

        divImg1.setAttribute("src", `assets/${magicLevelNames[counter].toLowerCase()}.png`)
        console.log(magicLevelNames[counter].toLowerCase())
        divImg1.id = cardId[counter]
        counter += 1
        divImg2.setAttribute("src", `assets/${magicLevelNames[counter].toLowerCase()}.png`)
        divImg2.id= cardId[counter]
        counter += 1

        div.appendChild(divImg1)
        div.append(divImg2)

        document.getElementById("row").appendChild(div)
    }
    cards = Array.from(document.getElementsByClassName("card"))
    cardZoom()
};

// Fright Factor
document.getElementById("fright-factor").onclick = function() {

    sorted = true

    document.getElementById("row").removeChild(document.getElementById("first"))
    document.getElementById("row").removeChild(document.getElementById("second"))
    document.getElementById("row").removeChild(document.getElementById("third"))
    document.getElementById("row").removeChild(document.getElementById("fourth"))
    document.getElementById("row").removeChild(document.getElementById("fifth"))
    document.getElementById("row").removeChild(document.getElementById("sixth"))
    document.getElementById("row").removeChild(document.getElementById("seventh"))
    document.getElementById("row").removeChild(document.getElementById("eighth"))
    document.getElementById("row").removeChild(document.getElementById("nineth"))


    var counter = 0
    for (var i = 0; i < 9; i++) {

        var div = document.createElement("div")
        var divImg1 = document.createElement("img")
        var divImg2 = document.createElement("img")

        div.classList.add("slot")
        divImg1.classList.add("card")
        divImg2.classList.add("card")
        div.id = id[i]

        divImg1.setAttribute("src", `assets/${frightFactorNames[counter].toLowerCase()}.png`)
        divImg1.id = cardId[counter]
        counter += 1
        divImg2.setAttribute("src", `assets/${frightFactorNames[counter].toLowerCase()}.png`)
        divImg2.id = cardId[counter]
        counter += 1

        div.appendChild(divImg1)
        div.append(divImg2)

        document.getElementById("row").appendChild(div)
    }
    cards = Array.from(document.getElementsByClassName("card"))
    cardZoom()
};

function cardZoom() {
    var clicked = false
    var prevCard
    var overlay

    cards = Array.from(document.getElementsByClassName("card"))
    console.log(cards)
    cards.forEach(card => { 
        clicked = false                                 
        card.addEventListener("click", () => {

            console.log("yes")

            overlay = document.createElement("DIV")
            overlay.classList.add("overlay")
            overlay.classList.add("visible")
            document.body.appendChild(overlay)

            // another card clicked
            if (clicked) {
                prevCard.classList.remove(`moveCard${prevCard.id}`)
                clicked = false
            }

            // card clicked
            card.classList.add(`moveCard${card.id}`)
            prevCard = card
            clicked = true
        });
    });

    var ignoreClickOnMeElement = document.querySelector(".card-container")
    document.addEventListener('click', function(event) {
        var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        console.log(sorted)
        if (!isClickInsideElement) {
            prevCard.classList.remove(`moveCard${prevCard.id}`)
            overlay.classList.add("overlay-gone")
            setTimeout(() => {
                document.body.removeChild(overlay)
            }, 1000)
        }
    });
}

cardZoom()