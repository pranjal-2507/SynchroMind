document.addEventListener('DOMContentLoaded' , function(){
    var audioContext = new Audio("./bgMusic.mp3")
    audioContext.play();
    audioContext.loop = true;
    
})


const beginButton = document.getElementById("LetsBegin");
beginButton.addEventListener('click' , function(){

var Nickname = document.getElementById("PlayNick").value;
var name = document.getElementById("Name").value;

if(Nickname == "" && name == ""){
    alert("Please Enter your name & nickname");
}
else{
    localStorage.setItem('Nickname' , Nickname);
    
    window.location.href = 'Level1.html';
}



})