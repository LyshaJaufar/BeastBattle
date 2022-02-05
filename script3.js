        const cardImg = document.createElement('IMG')
        const cardImg2 = document.createElement('IMG')

        const cardDiv = document.createElement('div')
        cardDiv.classList.add("maindeckcontainer")

        const innerCardDiv = document.createElement('div')
        const innerCardDiv2 = document.createElement('div')
        innerCardDiv.classList.add("backcard")
        innerCardDiv2.classList.add("frontcard")
        
        cardImg.setAttribute("src", this.image);
        cardImg2.setAttribute("src", "torpixtest.png");  
        cardImg.classList.add("card")
        cardImg2.classList.add("card")

        innerCardDiv.appendChild(cardImg)
        innerCardDiv2.appendChild(cardImg2)
    
        cardDiv.appendChild(innerCardDiv)
        cardDiv.appendChild(innerCardDiv2)