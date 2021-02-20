var box = document.querySelector(".block")
var elementTop = 100;
var elementLeft =100;

// var myInterval = setInterval(function(){
//     var box = document.createElement()
//     box.style.left = Math.floor(Math.random()*100)
    
// },1000)

document.addEventListener("keyup",function(e){
    if(e.keyCode == 37){
        elementLeft -=10;
        box.style.left = elementLeft +"px"
    }
    else if(e.keyCode == 39){
        elementLeft +=10;
        box.style.left = elementLeft + "px"
    }
    else if(e.keyCode == 38){
        elementTop -=10
        box.style.top = elementTop +"px"
    }
    else if(e.keyCode == 40){
        elementTop +=10
        box.style.top = elementTop +"px"
    }
})