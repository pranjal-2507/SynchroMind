document.addEventListener('DOMContentLoaded' , function(){
    var audioContext = new Audio("./loseAudio.wav")
    audioContext.play();
    audioContext.loop = false;
    
})

const losePhrase = document.getElementById("losePhrase")
const randomLosePhrases = ["Better Luck Next Time😞","Oops Try Again😓", "Game Over. Try again🥲"];
losePhrase.innerHTML=randomLosePhrases[Math.floor(Math.random()*randomLosePhrases.length)]
console.log(randomLosePhrases[Math.floor(Math.random()*randomLosePhrases.length)])
const NoOfLevel = document.getElementById("level").innerHTML;
document.getElementById("level").innerHTML =
  localStorage.getItem("currentLevel");

const playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener("click", function () {
  window.location.href = `Level${parseInt(
    localStorage.getItem("currentLevel")
  )}.html`;
});

const HomeButton = document.getElementById("home");
HomeButton.addEventListener("click", function () {
  window.location.href = "index.html";
});