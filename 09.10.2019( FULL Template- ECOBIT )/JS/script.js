// window.onscroll = function () { myfunction() };
// var navbar = document.querySelector(".main-menu");
// var sticky = navbar.offsetTop;
// function myfunction(){
// if (window.pageYOffset > sticky){
//     navbar.classList.add("active")
// }

// else{
//     navbar.classList.remove("active")
// }

// }
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".main-menu").addClass("active")
        $(".sing-up").addClass("active")
        $(".btn-features").addClass("active")
    }
    else {
        $(".main-menu").removeClass("active")
        $(".sing-up").removeClass("active")
        $(".btn-features").removeClasss("active")
    }
})

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});


$('.logo-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})
$(".card-body").hide()
$(".card-text button").click(function () {
    $(this).parent().parent().next().toggle()
    $(".card-text").classList().replace("fa-plus", "fa-minus")
})

$(".card-text i").click(function () {
    $(this).parent().parent().next().toggle()

})

