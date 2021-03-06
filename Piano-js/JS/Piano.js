document.addEventListener("keydown", function(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    var key = document.querySelector(`.piano-btn[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    if (key.classList.contains('white-btn')) {
        key.classList.add("white-playing");
    } else {
        key.classList.add("black-playing");
    }

})

const keys = document.querySelectorAll('.key');


keys.forEach((key) => key.addEventListener("keyup", removeClass));


var pianobtns = document.getElementsByClassName(".piano-btn");

for (let i = 0; i < pianobtns.length; i++) {
    pianobtns[i].addEventListener("click", function(e) {
        var audio = document.querySelector(
            `audio[data-key="${e.target.getAttribute("data-key")}"]`
        );
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
    });
}

window.addEventListener('keyup', function(e) {
    var key = document.querySelector(`.piano-btn[data-key="${e.keyCode}"]`)
    if (!key) return;
    if (key.classList.contains('white-btn')) {
        key.classList.remove("white-playing");
    } else {
        key.classList.remove("black-playing");
    }
})