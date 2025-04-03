const allButton=document.querySelectorAll("button")
const roundUpdater=document.getElementById("RoundUpdater")
const scoreBox=document.getElementById("score")
let randomNumber=(Math.random() * 3 + 1).toFixed(0)
let round=0
let game=false
let pattersArray=[]
let userInput=[]
let allTheButtonsId=["red","green","yellow","blue"]
// all the fucntions
const startGame=()=>{
    return game=true
}

const mainGame=()=>{
    addEventListener("keypress",()=>{
        startGame()
        if (game===true) {
            colorBlink()
            console.log(pattersArray)
            allButton.forEach((button)=>{

                button.addEventListener("click",()=>{

                })
            })
        }
    })
}
const colorBlink=()=>{
    randomNumber=(Math.random() * 3 + 1).toFixed(0)
    pattersArray.push(randomNumber)
    const blinkButton=document.getElementById(allTheButtonsId[(randomNumber)-1])
    setTimeout(()=>{
        blinkButton.style.backgroundColor=`${allTheButtonsId[(randomNumber)-1]}`
        console.log(allTheButtonsId[(randomNumber)-1]);
    },350)
    blinkButton.style.backgroundColor="  #FFFFFF"
}

const endGame=()=>{
    roundUpdater.innerText="Game Over!"
    return game=false
}

mainGame()