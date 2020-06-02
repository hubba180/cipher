$(document).ready(function(){
  $(".clickable1").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".clickable2").click(function() {
    $("#bird").slideToggle();
  });
});

