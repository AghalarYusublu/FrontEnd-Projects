var btns = document.querySelectorAll(".btn")
var button = document.querySelectorAll(".button")
var main = document.querySelector(".main")


for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        this.classList.toggle("active")
        this.nextElementSibling.classList.toggle("active")
    }
    )
}

