let cart = JSON.parse(localStorage.getItem("cart")) || [];
const summaryDiv = document.getElementById("summary");
const totalDiv = document.getElementById("total");
function displaySummary() {
    let total = 0;
    summaryDiv.innerHTML = "";
    if (cart.length === 0) {
        summaryDiv.innerHTML = "<p>Your cart is empty.</p>";
        totalDiv.textContent = "$0";
        return;
    } 
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        summaryDiv.innerHTML += `
            <p>${item.name} (x${item.quantity}) - $${itemTotal}</p>
        `;
    });
    totalDiv.textContent = "$" + total;
}
function placeOrder() {
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const payment = document.getElementById("payment").value;
    if (!name || !address || !payment) {
        alert("Please fill all fields");
        return;
    }
    if (cart.length === 0) {
        alert("The cart is empty");
        return;
    }
    alert("Order placed successfully");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}
displaySummary();
function Darkmode() {
document.body.classList.toggle("dark-mode")
}