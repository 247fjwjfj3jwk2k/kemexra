
document.querySelector('.myform').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorElement = document.getElementById('error');
    if (name === "" || email === "" || subject === "" || message === "") {
        event.preventDefault(); 
        errorElement.innerText = "Please fill in all the required fields!";
    } else {
        errorElement.innerText = "";
        alert("Sent successfully!");
    }
});
