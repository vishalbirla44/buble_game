var timer  = 60;
var score = 0;
var hitrn = 0 ;

function increaseScore(){
    score += 10;
    document.querySelector('#scorebox').textContent = score ;
}

function runtimer(){
    
    var timerint =  setInterval(function(){
       if(timer > 0){
        timer--;
        document.querySelector('#timerbox').innerHTML = timer;
       } 
       else{
        clearInterval(timerint)
        document.querySelector('#pbtm').innerHTML = `<h1>Game over <br> score : ${score}</h1>`
       }
        
    },1000)
}
function makeBuble(){
    var cluter = ''

for(let i = 0; i<= 118;i++){
   var a= Math.floor(Math.random()*10)
    cluter += `<div id="bubble">${a}</div>`
}

document.querySelector('#pbtm').innerHTML = cluter

}

function newHit(){
    hitrn = Math.floor(Math.random()*10);
   document.querySelector('#hitbox').textContent = hitrn;

}

document.querySelector('#pbtm').
addEventListener('click',function(dets){
    var clickednum = Number(dets.target.textContent);
    if(hitrn === clickednum){
         increaseScore()   
         makeBuble()
         newHit()

    }
})




 newHit()

runtimer()

makeBuble()

