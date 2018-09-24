
$(document).ready(function() {
  // set section heights to fit on viewers screen
  var height = $(window).height();
  $("#landing").css("min-height", height);
  $("#about-section").css("min-height", height);
  $("#projects-section").css("min-height", height);
  $("#contact-section").css("min-height", height);
  
  
});

// scroll to section on click
$('.navbar-collapse ul li').click(function(e) {
  var id = e.target.id;
  var section = "#";
  if (id == "about-link") {
    section = "#about-section";
  } else if (id === "projects-link") {
    section = "#projects-section";
  } else if (id === "contact-link") {
    section = "#contact-section";
  }
  
$('body').animate({
  scrollTop: $(section).offset().top}, 1000);
});

// scroll to top on click
$('.navbar-brand').click(function() {
  $('body').animate({
    scrollTop: $('#landing').offset().top}, 400);
});
