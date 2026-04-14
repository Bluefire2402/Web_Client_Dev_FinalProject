function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!email || !password) {
        alert("Please fill all fields");
        return;
    }
    const user = {
        Email: Email
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Login successful");
    window.location.href = "index.html";
}
function Darkmode() {
    document.body.classList.toggle("dark-mode")
    }