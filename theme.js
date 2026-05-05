(function() {
    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    function setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = name + '=' + value + '; expires=' + expires + '; path=/';
    }

    const saved = getCookie('theme');
    
    document.documentElement.style.transition = 'none';
    
    if (saved === 'light') {
        document.documentElement.classList.add('light-mode');
    }

    window.addEventListener('DOMContentLoaded', function() {
        requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                document.documentElement.style.transition = '';
            });
        });

        const btn = document.querySelector('.theme-btn');
        if (btn) {
            btn.textContent = saved === 'light' ? '🌙 Dark' : '☀️ Light';
        }
    });

    window.toggleTheme = function() {
        const isLight = document.documentElement.classList.toggle('light-mode');
        const btn = document.querySelector('.theme-btn');
        
        if (isLight) {
            btn.textContent = '🌙 Dark';
            setCookie('theme', 'light', 365);
        } else {
            btn.textContent = '☀️ Light';
            setCookie('theme', 'dark', 365);
        }
    };
})();