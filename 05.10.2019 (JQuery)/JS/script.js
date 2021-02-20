$(document).ready(function(){
var counter=0

$(".next").click(function(){
   counter++
 var piksel=-700*counter + "px"

    $("img").css("transform","translateX("+piksel+")")
})
$(".prev").click(function(){
    counter--
  var piksel=-700*counter + "px"
 
     $("img").css("transform","translateX("+piksel+")")
 })
 
//  $('button').click(function(){
  
//   swal({
//   title: 'Are you sure?',
//   text: "It will permanently deleted !",
//   type: 'warning',
//   showCancelButton: true,
//   confirmButtonColor: '#3085d6',
//   cancelButtonColor: '#d33',
//   confirmButtonText: 'Yes, delete it!'
// }).then(function() {
//   swal(
//     'Deleted!',
//     'Your file has been deleted.',
//     'success'
//   );
// })
  
// })

$(".btn-alert").click(function(){
  counter--
var piksel=-700*counter + "px"

   $("img").css("transform","translateX("+piksel+")")
   console.log()
})



})