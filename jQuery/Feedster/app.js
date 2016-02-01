var main = function() {
  $('.notification img').click(function(e) {
  	e.stopPropagation();
  	$('.notification-menu').toggle();
  });
  $(document.body).click( function(e) {
    $('.notification-menu').hide();
  });
  $('.post .btn').click(function() {
  	$(this).toggleClass('btn-like');
  });
};



$(document).ready(main);