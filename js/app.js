$(document).ready(function() {
  //scroll to about
  $("#about").on("click", function() {
    $('html, body').animate({
      scrollTop: $("#aboutSection").offset().top - 203
    }, 1000);
  });
  //scroll to work, might need to make same function
  $("#work").on("click", function() {
    $('html, body').animate({
      scrollTop: $("#projectSection").offset().top 
    }, 1000);
  });
  //css overlay for projects
  var overlay = '<div id="overlay"> </div>';
  $(".projects").on("hover", function() {
    $(this).append(overlay);
  });
});