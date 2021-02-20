
var btn = document.querySelector("#btn")
var netice = document.querySelector("#netice")

function Hesabla() {
    var qiymet = 0
    var bal = Number(document.querySelector("#txtbal").value);
    if (bal <= 0) {
        qiymet = -1
    }
    else if (bal < 30) {
        qiymet = 1
    }
    else if (bal < 50) {
        qiymet = 2
    }
    else if (bal < 65) {
        qiymet = 3
    }
    else if (bal < 85) {
        qiymet = 4
    }
    else if (bal <= 100) {
        qiymet = 5
    }

    else {
        qiymet = -1
    }

    if (qiymet == -1) {
        netice.innerHTML = "Keçərsiz qiymət"
    }
    else {
        netice.innerHTML = "Qiymətiniz : " + qiymet
    }
}

btn.addEventListener("click", function () {
    Hesabla()
})