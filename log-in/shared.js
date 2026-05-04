
//ده خاص بعكس الالوان
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