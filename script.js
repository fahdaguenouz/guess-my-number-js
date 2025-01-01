'use strict';

let secretNumber =Math.round(Math.random()*20)+1;
let score=20;
let highScore=0;
document.querySelector(".check").addEventListener('click',function(){
const guess = document.querySelector(".guess").value
console.log(guess);
console.log(secretNumber);

if(score>1){
    if (!guess){
        document.querySelector(".message").textContent='No Number '
    }else if(guess==secretNumber){
        document.querySelector(".body").style.backgroundColor='#60b347';
        document.querySelector(".number").style.width='30rem';
        document.querySelector(".message").textContent='Correct Number!'
        document.querySelector(".number").textContent=secretNumber;
        if(score>highScore){
            highScore=score;
            document.querySelector(".highscore").textContent=highScore;
        }
    }else if(guess>secretNumber){
    
        document.querySelector(".message").textContent="Too high!";
        score--
       document.querySelector(".score").textContent=score
    }else if(guess<secretNumber){
        document.querySelector(".message").textContent="Too low!";
        score--
        document.querySelector(".score").textContent=score
    }
}else{
    document.querySelector(".body").style.backgroundColor='red';
     document.querySelector(".number").style.width='30rem';
     document.querySelector(".number").textContent=secretNumber;
    document.querySelector(".message").textContent='You lost the game ';
    document.querySelector(".score").textContent=0;
}

})

document.querySelector(".again").addEventListener('click',function(){
    secretNumber =Math.round(Math.random()*20)+1;
    score=20;
    document.querySelector(".number").style.width='15rem';
    document.querySelector(".message").textContent='Start guessing...';
    document.querySelector(".score").textContent=score;
    document.querySelector(".guess").value='';
    document.querySelector(".number").value='?';

})