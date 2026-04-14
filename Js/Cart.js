let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartDiv = document.getElementById("cart");
const totalDiv = document.getElementById("total");
function displayCart() {
    cartDiv.innerHTML = "";
    let total = 0;
    if (cart.length === 0) {
        cartDiv.innerHTML = "<p>Your cart is empty.</p>";
        totalDiv.textContent = "$0";
        return;
    }
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartDiv.innerHTML += `
            <div class="card p-3 mb-3">
                <h4>${item.name}</h4>
                <p>Price: $${item.price}</p>
                <label>Quantity:</label>
                <input type="number" value="${item.quantity}" min="1"
                 onchange="updateQuantity(${index}, this.value)">
                <p>Total: $${itemTotal}</p>
                <button class="btn btn-danger"
                onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });
    totalDiv.textContent = "$" + total;
}
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function updateQuantity(index, newQuantity) {
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}
displayCart();
function Darkmode() {
    document.body.classList.toggle("dark-mode")
    }