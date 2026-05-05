(function() {
    function getCookie(name) {
let cart = [];

if (localStorage.getItem('kemexra_cart')) {
    cart = JSON.parse(localStorage.getItem('kemexra_cart'));
}

function saveCart() {
    localStorage.setItem('kemexra_cart', JSON.stringify(cart));
}

function updateBadge() {
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById('cartCount');
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
}

function showCart() {
    const container = document.getElementById('cartitems');
    const footer    = document.getElementById('cartpanelfooter');

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<p style="color:gray; text-align:center; margin-top:40px">Your cart is empty!</p>';
        footer.style.display = 'none';
        return;
    }

    footer.style.display = 'block';

    cart.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'cart-row';
        row.innerHTML = `
            <div class="cart-row-name">${item.name}</div>
            <div class="cart-row-price">$${item.price * item.qty}</div>
            <div>
                <button class="qty-btn" data-index="${index}" data-action="dec">−</button>
                <span class="qty-number">${item.qty}</span>
                <button class="qty-btn" data-index="${index}" data-action="inc">+</button>
            </div>`;
        container.appendChild(row);
    });

    container.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const i = parseInt(this.dataset.index);
            if (this.dataset.action === 'inc') {
                cart[i].qty++;
            } else {
                cart[i].qty--;
                if (cart[i].qty <= 0) cart.splice(i, 1);
            }
            saveCart();
            updateBadge();
            showCart();
        });
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    document.getElementById('carttotal').textContent = '$' + total;
}

// فتح وقفل العربة
document.getElementById('cartBtn').addEventListener('click', function () {
    showCart();
    document.getElementById('cartpanel').classList.add('open');
    document.getElementById('cartbackdrop').classList.add('open');
});

document.getElementById('cartclosebtn').addEventListener('click', function () {
    document.getElementById('cartpanel').classList.remove('open');
    document.getElementById('cartbackdrop').classList.remove('open');
});

document.getElementById('cartbackdrop').addEventListener('click', function () {
    document.getElementById('cartpanel').classList.remove('open');
    document.getElementById('cartbackdrop').classList.remove('open');
});

// اضافة للعربة
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const name  = this.dataset.name;
        const price = parseFloat(this.dataset.price);

        const existing = cart.find(item => item.name === name);
        if (existing) {
            existing.qty++;
        } else {
            cart.push({ name, price, qty: 1 });
        }

        saveCart();
        updateBadge();
    });
});

// clear cart
const clearBtn = document.createElement('button');
clearBtn.className = 'clear-btn';
clearBtn.textContent = 'Clear Cart';
clearBtn.addEventListener('click', function () {
    cart = [];
    saveCart();
    updateBadge();
    showCart();
});
document.getElementById('cartpanelfooter').appendChild(clearBtn);

updateBadge();
