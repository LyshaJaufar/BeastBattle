import Deck from "./deck.js"

var deck = new Deck()
var age = [], power = [], magicLevel = [], frightFactor = []

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

var counter = 0
for (var i = 0; i < 9; i++) {

    var div = document.createElement("div")
    var divImg1 = document.createElement("img")
    var divImg2 = document.createElement("img")

    div.classList.add("slot")
    divImg1.classList.add("card")
    divImg2.classList.add("card")
    div.id = id[i]

    divImg1.setAttribute("src", `assets/${ageNames[counter]}.png`)
    counter += 1
    divImg2.setAttribute("src", `assets/${ageNames[counter]}.png`)
    counter += 1

    div.appendChild(divImg1)
    div.append(divImg2)

    document.getElementById("row").appendChild(div)
}


// SORTING
// Age
document.getElementById("age").onclick = function() {

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

        divImg1.setAttribute("src", `assets/${ageNames[counter]}.png`)
        counter += 1
        divImg2.setAttribute("src", `assets/${ageNames[counter]}.png`)
        counter += 1

        div.appendChild(divImg1)
        div.append(divImg2)

        document.getElementById("row").appendChild(div)
    }
};

// Power
document.getElementById("power").onclick = function() {

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

        divImg1.setAttribute("src", `assets/${powerNames[counter]}.png`)
        counter += 1
        divImg2.setAttribute("src", `assets/${powerNames[counter]}.png`)
        counter += 1

        div.appendChild(divImg1)
        div.append(divImg2)

        document.getElementById("row").appendChild(div)
    }
};

// Magic Level
document.getElementById("magic-level").onclick = function() {

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

        divImg1.setAttribute("src", `assets/${magicLevelNames[counter]}.png`)
        counter += 1
        divImg2.setAttribute("src", `assets/${magicLevelNames[counter]}.png`)
        counter += 1

        div.appendChild(divImg1)
        div.append(divImg2)

        document.getElementById("row").appendChild(div)
    }
};

// Fright Factor
document.getElementById("fright-factor").onclick = function() {

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

        divImg1.setAttribute("src", `assets/${frightFactorNames[counter]}.png`)
        counter += 1
        divImg2.setAttribute("src", `assets/${frightFactorNames[counter]}.png`)
        counter += 1

        div.appendChild(divImg1)
        div.append(divImg2)

        document.getElementById("row").appendChild(div)
    }
};
var widthCenter = window.innerWidth / 2
var heightCenter = window.innerHeight /2
var cards = Array.from(document.getElementsByClassName("card"))




cards.forEach(card => {            
                                 
    card.addEventListener("click", () => {
      
        card.style.position = "fixed"
        card.style.width = 200 + "px"
        card.style.height = 285.21 + "px"
        card.style.right = (widthCenter) - (parseInt(cards[0].style.width)/2) + "px"
        card.style.top = ((heightCenter) - (parseInt(cards[0].style.height)/2)) - 50 + "px"
   
    });

});


