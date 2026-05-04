const registrationForm = document.querySelector('form');
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
       const nameInput = document.querySelector('#name');
    const nameValue = nameInput.value.trim();
    if (nameValue === ""){
        alert("please enter your name");
        return;
    }

    const emailInput = document.querySelector('#email');
    const emailValue = emailInput.value.trim();
    if (emailValue === ""){
        alert("please enter your email");
        return;
    }

    if (!emailValue.includes("@") || !emailValue.includes(".")){
        alert("please enter valid email address (must contain @ and .)");
        return;
    }

    const paswdInput = document.querySelector('#password');
    const paswdValue = paswdInput.value.trim();
    if (paswdValue === ""){
        alert("please enter the passeord");
        return;
    }

    if (paswdValue.length < 8){
        alert("Password must be at least 8 characters");
        return;
    }

    const paswd2Input = document.querySelector('#confirm');
    const paswd2Value = paswd2Input.value.trim();
    if (paswd2Value === ""){
        alert("please enter the passeord");
        return;
    }

    if (paswd2Value !== paswdValue){
        alert("Passwords do not match! Please check again.");
        return;
    }



    localStorage.setItem('username', nameValue);
    localStorage.setItem('useremail', emailValue);
    localStorage.setItem('password', paswdValue);
    alert("تم حفظ البيانات بنجاح");
    window.location.href = "google.com"

    });
 

 