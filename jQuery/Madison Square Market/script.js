var main = function() {

  $('.cart').click(function(e) {
  	e.stopPropagation();
  	$('.cart .dropdown-menu').toggle();
  	$('.help .dropdown-menu').hide();
  	$('.account .dropdown-menu').hide();
  });

  $('.account').click(function(e) {
  	e.stopPropagation();
  	$('.account .dropdown-menu').toggle();
  	$('.help .dropdown-menu').hide();
    $('.cart .dropdown-menu').hide();
  });

  $('.help').click(function(e) {
  	e.stopPropagation();
  	$('.help .dropdown-menu').toggle();
  	$('.cart .dropdown-menu').hide();
    $('.account .dropdown-menu').hide();
  });

  $(document.body).click( function(e) {
    $('.help .dropdown-menu').hide();
    $('.cart .dropdown-menu').hide();
    $('.account .dropdown-menu').hide();
  });
};

$(document).ready(main);