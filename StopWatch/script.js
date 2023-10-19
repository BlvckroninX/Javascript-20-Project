const timeEl = document.querySelector('.time')
const startbtn =document.querySelector('.start')
const pausebtn =document.querySelector('.pause')
const resetbtn = document.querySelector('.reset')



//เวลา 1000 ms = 1s , 60s => 1m , 60m => 1h
let [millisec,seconds,minutes,hours]=[0,50,59,23]
let timer = null
startbtn.addEventListener('click',startTimer)
pausebtn.addEventListener('click',pauseTimer)
resetbtn.addEventListener('click',resetTimer)

function startTimer(){
    if(timer != null){
        clearInterval(timer)
    }
     timer = setInterval(displayTime,10)
}
function pauseTimer (){
    clearInterval(timer)
}
function resetTimer (){
    clearInterval(timer)
    hours = 0 
    minutes = 0
    seconds = 0
    millisec = 0
    timeEl.innerHTML='00:00:00:000'
}






function displayTime(){
    millisec+=10
    if(millisec == 1000){
        millisec = 0
        seconds +=1
    }
    else if(seconds == 60){
        seconds = 0
        minutes += 1
    }
    else if(minutes == 60 ){
        minutes = 0
        hours += 1 
    }
    else if (hours == 24){
        hours = 0
        millisec += 10
    }
    //ternary operator จัดรูปแบบตัวเลข
    //โดยการกดหนดเงื่อนไข ถ้าเป็นจริงจะอยู่หลัง ? แต่ถ้าเป็นเท็จ จะอยู้ด้านหลัง :
    let h = hours<10 ? "0" + hours: hours
    let m = minutes<10 ? "0" + minutes: minutes
    let s = seconds<10 ? "0" + seconds: seconds
    let ms = millisec<10 ? "0" + millisec: millisec
    timeEl.innerHTML= ` ${h}:${m}:${s}:${ms}`
}