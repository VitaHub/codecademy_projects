var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    
    if(firstName === "") {
      $('.first-name-error').text("Please enter your first name.");
    } else {
      $('.first-name-error').text("");
    };

    var lastName = $('#last').val();
    
    if(lastName === "") {
      $('.last-name-error').text("Please enter your last name.");
    } else {
      $('.last-name-error').text("");
    };

    var email = $('#email').val();
    
    if(email === "") {
      $('.email-error').text("Please enter your email address.");
    } else {
      if(email === "z_best92@mail.ru") {
        $('.email-error').text("This email is already taken.");
      } else {
        $('.email-error').text("");
      };
    };

    var password = $('#password').val();
    
    if(password === "") {
      $('.password-error').text("Please enter a password.");
    } else {
      if(password.length < 8) {
        $('.password-error').text("Short passwords are easy to guess. Try one with at least 8 characters.");
      } else {
        $('.password-error').text("");
      };
    };



    return false;
  });
};

$(document).ready(main);