 let cart = JSON.parse(localStorage.getItem('kemexra_cart') || '[]');

function saveCart() {
    localStorage.setItem('kemexra_cart', JSON.stringify(cart));
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

    cart.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'cart-row';
        row.innerHTML = `
            <div class="cart-row-name">${item.name}</div>
            <div class="cart-row-price">$${item.price * item.qty}</div>`;
        container.appendChild(row);
    });

    document.getElementById('carttotal').textContent = '$' + cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function closeCart() {
    document.getElementById('cartpanel').classList.remove('open');
    document.getElementById('cartbackdrop').classList.remove('open');
}

document.getElementById('cartBtn').addEventListener('click', function () {
    showCart();
    document.getElementById('cartpanel').classList.add('open');
    document.getElementById('cartbackdrop').classList.add('open');
});

document.getElementById('cartclosebtn').addEventListener('click', closeCart);
document.getElementById('cartbackdrop').addEventListener('click', closeCart);

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
    });
});

const clearBtn = document.createElement('button');
clearBtn.className = 'clear-btn';
clearBtn.textContent = 'Clear Cart';
clearBtn.addEventListener('click', function () {
    cart = [];
    saveCart();
    showCart();
});
document.getElementById('cartpanelfooter').appendChild(clearBtn); 

