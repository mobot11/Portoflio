$(document).ready(function() {
  $("#about").on("click", function() {
    $('html, body').animate({
      scrollTop: $("#aboutSection").offset().top - 203
    }, 1000);
  });
  $("#work").on("click", function() {
    $('html, body').animate({
      scrollTop: $("#projectSection").offset().top 
    }, 1000);
  });
});