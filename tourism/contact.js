const contactForm = document.querySelector('.myform');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const errorElement = document.getElementById('error');

window.onload = function() {
    nameInput.value = localStorage.getItem('cont_name') || "";
    emailInput.value = localStorage.getItem('cont_email') || "";
};

contactForm.addEventListener('submit', function(event) {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        event.preventDefault();
        errorElement.innerText = "Please fill in all fields!";
    } else {
        localStorage.setItem('cont_name', name);
        localStorage.setItem('cont_email', email);
        
        errorElement.innerText = "";
        alert("Sent and Saved successfully!");
    }
});
