var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var displayP1 = document.querySelector("#d1");
var displayP2 = document.querySelector("#d2");
var reset = document.querySelector("#reset");
var scoreSet = document.getElementById("scoreSet");
var target = document.getElementById("target");

var p1Score = 0;
var p2Score = 0;
var winningScore = 0;
var gameOver = false;
resetAll();

scoreSet.addEventListener("change", function(){
    if(p1Score <= 0 || p2Score <=0){
    target.textContent = this.value;
    winningScore = Number(this.value);
    }
});

player1.addEventListener("click", function(){
    p1Score ++;
    if(!gameOver){
        if(p1Score === winningScore){
           displayP1.classList.add("winner");
            gameOver = true;
        }
        displayP1.textContent = p1Score ;
    }
    p1score = Number(this.value);
});

player2.addEventListener("click", function(){
    p2Score ++;
    if(!gameOver){
        if(p2Score === winningScore){
           displayP2.classList.add("winner");
            gameOver = true;
        }
        displayP2.textContent = p2Score ;
    }
    p2score = Number(this.value);
});

reset.addEventListener("click", resetAll);
function resetAll(){
    p1Score = 0;
    p2Score = 0;
    displayP1.textContent = 0 ;
    displayP2.textContent = 0 ;
    displayP1.classList.remove("winner");
    displayP2.classList.remove("winner");
    gameOver = false;
}
