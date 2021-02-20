var btn = document.querySelector(".btn")
var modal = document.querySelector(".modal")
var icon = document.querySelector(".fas.fa-times")
var close = document.querySelector(".close")


btn.addEventListener("click",function(e){
  e.preventDefault();
  console.log("sasaf")
  btn.classList.toggle("active")
  modal.classList.toggle("active")
  
})
icon.addEventListener("click",function(){
    modal.classList.replace("active","remove")
  
})
close.addEventListener("click",function(){
    modal.classList.replace("active","remove")
  
})