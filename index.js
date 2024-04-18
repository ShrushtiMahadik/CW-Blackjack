let n = 0

function getrandom()
{
    n = Math.floor(Math.random()*13)+1
    if(n==1 )
    {
        n = 11
    }else if(n > 10){
          n = 10
    }

    return n 
}

let firstCard = 0
let secondcard = 0
let cards = 0
let sum = 0
let isBlack = false
let isAlive = false
let message = ""
let cr = document.getElementById("cnt1-el")

function start()
{
    isAlive = true
    firstCard = getrandom()
    secondcard = getrandom()
    cards = [firstCard,secondcard]
    sum = cards[0] + cards[1]
    render()
}


function render(){
   
    cr.textContent = "CARD  "

    for(let i =0;i<cards.length;i+=1)
    {
        cr.textContent += cards[i]+ "  "
    }

    if (sum <= 20){
        message = " Do you want to withdraw another card ?"
    }else if (sum === 21){
        message = "Woohoo! it's a blackjack"
        isBlack = true
    }else{
        message = " You are out of the game "
        isAlive = false
    }

    document.getElementById("cnt3-el").innerText = "SUM  :    "+sum
    document.getElementById("message-el").innerText = message
}

function newcard()
{   
    if(isBlack == false && isAlive === true)
    { 
        let ncard = getrandom()
        cards.push(ncard)
        sum += cards[cards.length-1]
    
        render()
    }
    
}

