function toggleTheme() {
    document.documentElement.classList.toggle('light-mode');

    const btn = document.querySelector('.theme-btn');
    if (document.documentElement.classList.contains('light-mode')) {
        btn.textContent = '🌙 Dark';
        localStorage.setItem('theme', 'light');
    } else {
        btn.textContent = '☀️ Light';
        localStorage.setItem('theme', 'dark');
    }
}

// حفظ اللون بتاع الموقع سواء دارك او لايت خلال التصفح
window.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        document.documentElement.classList.add('light-mode');
        const btn = document.querySelector('.theme-btn');
        if (btn) btn.textContent = '🌙 Dark';
    }
});

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