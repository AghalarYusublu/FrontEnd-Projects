var btn1 = document.querySelector(".btn-1")
var btn2 = document.querySelector(".btn-2")
var zer1 = document.querySelector(".zer1")
var zer2 = document.querySelector(".zer2")
var zer3 = document.querySelector(".zer3")
var zer4 = document.querySelector(".zer4")
var total1 = document.querySelector(".total1")
var total2 = document.querySelector(".total2")
var player1total = 0
var player2total = 0
var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")

var imageArray = [
    "1.png", "2.png", "3.png", "4.png", "5.png", "6.png"
]
btn1.addEventListener("click", function (e) {
    e.preventDefault()
    var zer1val = zer1.innerText = Math.floor(Math.random() * 6) + 1
    var zer2val = zer2.innerText = Math.floor(Math.random() * 6) + 1

    total1.innerText = player1total = player1total + (zer1val + zer2val)

    img1.src = "./img/" + imageArray[zer1val - 1]
    img2.src = "./img/" + imageArray[zer2val - 1]

    if(total1.innerText >=100){
        alert("1ci oyunçu qazandı")
        
    }
})

btn2.addEventListener("click", function (e) {
    e.preventDefault()
    var zer3val = zer3.innerText = Math.floor(Math.random() * 6) + 1
    var zer4val = zer4.innerText = Math.floor(Math.random() * 6) + 1
    total2.innerText = player2total = player2total + (zer3val + zer4val)

    img1.src = "./img/" + imageArray[zer3val - 1]
    img2.src = "./img/" + imageArray[zer4val - 1]

    if(total2.innerText >=100){
        alert("2ci oyunçu qazandı")
    }
})
