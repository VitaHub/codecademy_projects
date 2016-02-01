var main = function() {
  $('.dropdown img').click(function(e) {
  	e.stopPropagation();
  	$('.dropdown-menu').toggle();
  });
  $(document.body).click( function(e) {
    $('.dropdown-menu').hide();
  });

  $('form').submit(function() {
    var email = $('#email').val();
    
    if(email === "") {
      $('.email-error').text("Please enter your email.");
    } else {
      if(email === "z_best92@mail.ru") {
        $('.email-error').text("This email is already taken.");
      } else {
        $('.email-error').text("");
      };
    };

    var password = $('#password').val();
    
    if(password === "") {
      $('.password-error').text("Please enter your password.");
    } else {
      $('.password-error').text("");
    };



    return false;
  });
};

$(document).ready(main);