const allButton=document.querySelectorAll("button")
const roundUpdater=document.getElementById("RoundUpdater")
const scoreBox=document.getElementById("score")
let randomNumber=(Math.random() * 3 + 1).toFixed(0)
let round=0
let game=false
let pattersArray=[]
let allTheButtonsId=["red","green","yellow","blue"]
// all the fucntions
const startGame=()=>{
    addEventListener("keypress",()=>{
        round=1
    })
    return game=true
}

const mainGame=()=>{

}
const colorBlink=()=>{
    randomNumber=(Math.random() * 3 + 1).toFixed(0)
    const blinkButton=document.getElementById(allTheButtonsId[(randomNumber)-1])
    setTimeout(()=>{
        blinkButton.style.backgroundColor=`${allTheButtonsId[(randomNumber)-1]}`
        console.log(allTheButtonsId[(randomNumber)-1]);
    },350)
    blinkButton.style.backgroundColor="  #FFFFFF"
}

const endGame=()=>{
    return game=false
}
