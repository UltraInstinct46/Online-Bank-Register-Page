function togglePassword() {
    var passwordInput = document.getElementById('password');
    var passwordToggle = document.getElementById('password-toggle');
    if (passwordInput.type == 'password') {
      passwordInput.type = 'text';
      passwordToggle.innerHTML = '<i class="bi bi-eye" id="password-icon" onclick="togglePassword()"></i>';
    } else {
      passwordInput.type = 'password';
      passwordToggle.innerHTML = '<i class="bi bi-eye-slash" id="password-icon" onclick="togglePassword()"></i>';
    }
  }

  function validateEmail(){
    var email = document.getElementById('email-text').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var box = document.getElementById('email-form');
    var alert = document.getElementById('email-alert');
    if(emailRegex.test(email)){
        box.style.backgroundColor = 'transparent';
        alert.style.visibility = 'hidden';
    } else {
        box.style.backgroundColor = '#FF9246';
        alert.style.visibility = 'visible';
    }
  }

  function validateName(){
    var name = document.getElementById('name-text').value;
    var limit = 32;
    var box = document.getElementById('name-form');
    var alert = document.getElementById('name-alert');
    if(name.length >= limit){
        box.style.backgroundColor = '#FF9246';
        alert.style.visibility = 'visible';
    } else {
        box.style.backgroundColor = 'transparent';
        alert.style.visibility = 'hidden';
    }
  }

  function validatePhone(){
    var phone = document.getElementById('phone-text').value;
    var limit = 12;
    var box = document.getElementById('phone-form');
    var alert = document.getElementById('phone-alert');
    if(phone.length >= limit){
        box.style.backgroundColor = '#FF9246';
        alert.style.visibility = 'visible';
    } else {
        box.style.backgroundColor = 'transparent';
        alert.style.visibility = 'hidden';
    }
  }