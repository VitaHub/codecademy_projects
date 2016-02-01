var main = function() {
  $('.login p').click(function(e) {
  	/*e.stopPropagation();*/
  	$('.dropdown-menu').toggle();
  });
  $('.main').click( function(e) {
    $('.dropdown-menu').hide();
  });
  $( "#accordion" ).accordion();
 };

$(document).ready(main);