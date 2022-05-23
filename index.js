// Define
let minutes = 00;
let seconds = 00;
let tens = 00;

//Grabbing buttons

const startBtn = document.getElementById("start-btn")
const stopBtn = document.getElementById("stop-btn")
const resetBtn = document.getElementById("reset-btn")
let interval ;

//deifine tens and seconds
let appendMinutes = document.getElementById("minutes")
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")
// testing

startBtn.onclick = function(){
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

//Start timer
function startTimer(){
    tens++;

    if( tens < 9){
        appendTens.innerHTML= "0" + tens
    }
    
    if(tens>9){
        appendTens.innerHTML= tens
    }

    if(tens > 99){
        seconds++;
        
        if(seconds < 9){
            appendSeconds.innerHTML= "0" + seconds
        }

        if(seconds > 9){
            appendSeconds.innerHTML= seconds
        }

        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML= minutes

            seconds=0
            appendSeconds.innerHTML= "0" + seconds
            
        }
        tens = 0
        appendTens.innerHTML= "0" + tens
       
    }

}

stopBtn.onclick= () => {
    clearInterval(interval)
}

resetBtn.onclick= () => {
    tens = 0
    seconds = 0 
    minutes = 0
    appendMinutes.innerHTML= "0" + minutes
    appendSeconds.innerHTML= "0" + seconds
    appendTens.innerHeight= "0" + tens

    clearInterval(interval)
}