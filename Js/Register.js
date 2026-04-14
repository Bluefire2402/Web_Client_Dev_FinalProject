function register() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill all the fields");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords are different");
        return;
    }
    const user = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem("registeredUser", JSON.stringify(user));
    alert("Registration successful");
    window.location.href = "login.html";
}
function Darkmode() {
document.body.classList.toggle("dark-mode")
}