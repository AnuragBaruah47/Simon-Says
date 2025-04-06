const allButton = document.querySelectorAll(".button")
const roundUpdater = document.getElementById("RoundUpdater")
const scoreBox = document.getElementById("score")
const startButton = document.getElementById("start")
const body=document.querySelector("body")
const container=document.querySelector(".container")
let round = 0
let game = false
let pattersArray = []
let userInput = []
const allTheButtonsId = ["red", "green", "yellow", "blue"]
const clickaudio=new Audio("smb_coin.wav")
const gameOverAudio=new Audio("smb_gameover.wav")
const beforeStartMusic=new Audio("maintheme.mp3")
beforeStartMusic.play()
const startGame = () => {
    beforeStartMusic.play()
    round = 1;
    game = true;
    pattersArray = [];
    userInput = [];
    roundUpdater.innerText = `Round ${round}`
    scoreBox.innerText = ""
    startButton.disabled = true
    nextPattern();
};

const nextPattern = () => {
    userInput = [];
    let randomNumber = Math.floor(Math.random() * 4);
    const color = allTheButtonsId[randomNumber]
    pattersArray.push(color)
    console.log(pattersArray)
    const blinkButton = document.getElementById(color)
    blinkButton.style.backgroundColor = color
    setTimeout(() => {
        blinkButton.style.backgroundColor=`${allTheButtonsId[(randomNumber)]}`
    }, 350);
    blinkButton.style.backgroundColor = "#FFFFFF"
}

const endGame = () => {
    roundUpdater.innerText = "Game Over!";
    scoreBox.innerText = `Your Score = ${round - 1}`
    startButton.disabled = false;
    game = false;
    pattersArray = [];
    userInput = [];
};



allButton.forEach(button => {
    button.addEventListener("click", () => {
        if (!game) return
        userInput.push(button.id)
        const userInputString = userInput.join(" ")
        const pattersArrayString = pattersArray.join(" ")
        if (userInputString === pattersArrayString) {
            beforeStartMusic.pause()
            clickaudio.play()
            setTimeout(() => {
                body.style.backgroundColor=" #000000"
                roundUpdater.style.color=" #ffffff"
                container.style.border="20px solid white"
            }, 300) 
            body.style.backgroundColor="	#90EE90"
            roundUpdater.style.color=" #90EE90"
            container.style.border="0px"
            round++
            roundUpdater.innerText = `Round ${round}`
            setTimeout(nextPattern, 400)
        } else if (!pattersArrayString.startsWith(userInputString)) {
            setTimeout(() => {
                body.style.backgroundColor=" #000000"
                roundUpdater.style.color=" #ffffff"
                container.style.border="20px solid white"
            }, 300) 
            body.style.backgroundColor="rgb(255, 0, 0)"
            roundUpdater.style.color="rgb(255, 0, 0)"
            container.style.border="0px"
            gameOverAudio.play()
            endGame()
        }
    });
});
startButton.addEventListener("click", startGame)