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
    addEventListener("keypress",()=>{
        return game=true
    })
    round=1
    roundUpdater.innerText=`Round ${round}`
}

const mainGame=()=>{
    
}
const colorBlink=()=>{
    if (game===true){
        randomNumber=(Math.random() * 3 + 1).toFixed(0)
        pattersArray.push(allTheButtonsId[(randomNumber)-1])
        const blinkButton=document.getElementById(allTheButtonsId[(randomNumber)-1])
        setTimeout(()=>{
            blinkButton.style.backgroundColor=`${allTheButtonsId[(randomNumber)-1]}`
        },350)
        blinkButton.style.backgroundColor="  #FFFFFF"
    }
}

const endGame=()=>{
    roundUpdater.innerText="Game Over!"
    scoreBox.innerText=`Your Score = ${round}`
    return game=false
}

mainGame()









// const mainGame=()=>{
//     addEventListener("keypress",()=>{
//         startGame()
//         if (game===true) {
//             colorBlink()
//             console.log(pattersArray)
//             allButton.forEach((button)=>{
//                 button.addEventListener("click",()=>{
//                     userInput.push(button.id)
//                     const userInputString=userInput.join(" ")
//                     console.log(userInputString);
//                     const pattersArrayString=userInput.join(" ")
//                     console.log(pattersArrayString);
//                     if (userInputString===pattersArrayString) {
//                         colorBlink()
//                         round++
//                         roundUpdater.innerText=`Round ${round}`
//                     }else{
//                         endGame()
//                     }
//                 })
//             })
//         }
//     })
// }