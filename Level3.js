// Declarations of variables
let matches = 0;
var currentLevel = 3;

document.addEventListener('DOMContentLoaded' , function(){
  var audioContext = new Audio("./BgAudio2.mp3")
  audioContext.play();
  audioContext.loop = true;
  
})
const emojis = [
  "🎈",
  "🎈",
  "🎁",
  "🎁",
  "👑",
  "👑",
  "⚽",
  "⚽",
  "🎖️",
  "🎖️",
  "💡",
  "💡",
  "📒",
  "📒",
  "⏰",
  "⏰",
  "🌼",
  "🌼",
  "🚲",
  "🚲",
  "🐉",
  "🐉",
  "🏠",
  "🏠",
  "🌈",
  "🌈",
  "💙",
  "💙",
  "❓",
  "❓",
];

// Getting Random Emojis.
var shuf_emoji = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuf_emoji[i];
  box.onclick = function () {
    this.classList.add("boxOpen");
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ==
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          var CardMatch = new Audio("./cardMatchNew.wav");
          CardMatch.play();

          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
          matches++;

          // conditions for cards match.
          if (matches == emojis.length / 2) {
            localStorage.setItem("currentLevel", currentLevel);
            location.href = "Win_page.html";
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };

  // Set Timer
  const currentLevel = 3;
  let seconds = 70;
  localStorage.setItem("initialsec",seconds)

  let timer = setInterval(() => {
    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (document.querySelectorAll(".boxOpen").length === emojis.length) {
      localStorage.setItem("currentLevel", currentLevel);
      localStorage.setItem("timeTaken",timeTaken);
      location.href = "Win_page.html";
    }
    if (seconds == 0) {
      localStorage.setItem("currentLevel", currentLevel);
      location.href = "Lose_page.html";
    }
    localStorage.setItem("timesec",seconds)
  }, 1000);

  document.querySelector(".game").appendChild(box);
}
