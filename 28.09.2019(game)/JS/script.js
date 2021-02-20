var divs = document.querySelectorAll(".game div")
var counter = 1;
var games1 = document.querySelector(".game .game1")
var games2 = document.querySelector(".game .game2")
var games3 = document.querySelector(".game .game3")
var games4 = document.querySelector(".game .game4")
var games5 = document.querySelector(".game .game5")
var games6 = document.querySelector(".game .game6")
var games7 = document.querySelector(".game .game7")
var games8 = document.querySelector(".game .game8")
var games9 = document.querySelector(".game .game9")


for( var i=0; i<divs.length; i++){
   divs[i].addEventListener("click",function(){
   
    if(counter %2==0){
        this.innerHTML = "O"
    }
    else{
        this.innerHTML = "X"
    }
showWinner()
   
counter++




   })
}
function showWinner(){
    if(games1.innerHTML == games2.innerHTML && games2.innerHTML == games3.innerHTML){
        alert(" you win")
    }
}