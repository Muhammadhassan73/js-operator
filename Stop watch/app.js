var min = 0
var sec = 0
var msec = 0
var htmlmin = document.querySelector("#min")
var htmlsec = document.querySelector("#sec")
var htmlmsec = document.querySelector("#msec")
var rokdo ;
function start(){
   rokdo = setInterval(function(){

        msec++
        htmlmsec.innerHTML = msec
        if(msec >= 100){
            sec++
            htmlsec.innerHTML = sec
            msec =0
        }else if(sec >= 10){
            min++
            htmlmin.innerHTML = min
            sec = 0
        }

        

    },10)
    document.querySelector('#startbtn').disabled = true

    
}
function stop(){
    clearInterval(rokdo)
}
function reset(){
    min = 0
    sec = 0
    msec = 0
    htmlmin.innerHTML = min
    htmlsec.innerHTML = sec
    htmlmsec.innerHTML = msec
}

 
    
