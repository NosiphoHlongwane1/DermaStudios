
let cart = [];
let cartCount = document.getElementById('cart-count');
let cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
let cartItemsList = document.getElementById('cart-items-list');


function updateCartCount() {
    cartCount.textContent = cart.length;
}


function updateCartItems() {
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItemsList.innerHTML = cart.map(item => {
            return `<div class="cart-item">
                        <h5>${item.name}</h5>
                        <p>${item.price}</p>
                    </div>`;
        }).join('');
    }
}


document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        
        let productCard = button.closest('.product-card');
        let productName = productCard.querySelector('h5').textContent;
        let productPrice = productCard.querySelector('p').textContent;
        
       
        cart.push({ name: productName, price: productPrice });

     
        updateCartCount();
        updateCartItems();
    });
});


document.getElementById('cart-button').addEventListener('click', () => {
    cartModal.show();
});

document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartModal = document.getElementById("cart-modal");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const floatingCart = document.getElementById("floating-cart");
    const closeCartBtn = document.getElementById("close-cart");

    // Add to Cart Functionality
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", (event) => {
            const productCard = event.target.closest(".product-card");
            const productName = productCard.querySelector("h5").innerText;
            const productPrice = parseFloat(productCard.querySelector("p").innerText.replace("R", ""));
            
            addToCart(productName, productPrice);
        });
    });

    function addToCart(name, price) {
        const existingItem = cart.find((item) => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCartUI();
    }

    function removeFromCart(index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        updateCartUI();
    }

    function updateCartUI() {
        cartItemsList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - R${item.price} x${item.quantity} 
            <button class="remove-item btn btn-sm btn-danger" data-index="${index}">Remove</button>`;
            cartItemsList.appendChild(li);
            total += item.price * item.quantity;
        });

        cartTotal.innerText = total.toFixed(2);
        cartCount.innerText = cart.length;
        
        // Add event listeners for remove buttons
        document.querySelectorAll(".remove-item").forEach((button) => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                removeFromCart(index);
            });
        });
    }

    // Floating Cart Button Click
    floatingCart.addEventListener("click", () => {
        cartModal.style.display = "block";
    });

    // Close Cart Modal
    closeCartBtn.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    // Hide Modal when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = "none";
        }
    });
});
