document.addEventListener('DOMContentLoaded' , function(){
    var audioContext = new Audio("./WinSound.wav")
    audioContext.play();
    audioContext.loop = false;
    
})

const RandomPhrases = document.getElementById("WinPhrase");
const RandomWinPhrases = ["Well done", "Your are a Champion","Good Job"];
WinPhrase.innerHTML=RandomWinPhrases[Math.floor(Math.random()*RandomWinPhrases.length)]

document.getElementById("NickName").innerHTML =
  localStorage.getItem("Nickname");

const NoOfLevel = document.getElementById("level").innerText;
document.getElementById("level").innerHTML =
  localStorage.getItem("currentLevel");

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", function () {
  const nextLevel = parseInt(localStorage.getItem("currentLevel")) + 1;

  window.location.href = `Level${nextLevel}.html`;
});

const playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener("click", function () {
  window.location.href = `Level${parseInt(
    localStorage.getItem("currentLevel")
  )}.html`;
});

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", function () {
  window.location.href = "index.html";
});
const playTime=localStorage.getItem("timesec");
var timeTaken = document.getElementById("timeTaken");
const initialSec=localStorage.getItem("initialsec")
timeTaken.innerHTML = initialSec-playTime;