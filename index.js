const startButton = document.getElementById("Start");
    document.getElementById("Start").addEventListener('click', function(){
        window.location.href = 'enterName.html'
    })

    document.addEventListener('DOMContentLoaded' , function(){
        var audioContext = new Audio("./bgMusic.mp3")
        audioContext.play();
        audioContext.loop = true;
        
    })