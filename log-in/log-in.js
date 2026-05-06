const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit',function(event) {
    event.preventDefault();

    const inputEmail = document.querySelector('#email').value.trim();
    const inputPassword = document.querySelector('#password').value.trim();
    const savedEmail = localStorage.getItem('useremail');
    const savedPassword = localStorage.getItem('password');

    if (inputEmail !== savedEmail ){
        alert("please enter a vaild email ");
        return;
    }
      if (inputPassword !== savedPassword){
        alert("password is wrong , please try again");
        return;
    }

     alert("Login Successful! Welcome to KEMEXRA."); 
     window.location.href = "../index.html";

});

