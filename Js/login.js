function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!email || !password) {
        alert("Please fill all fields");
        return;
    }
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (!savedUser) {
        alert("No user registered");
        return;
    }
    if (email === savedUser.email && password === savedUser.password) {
        localStorage.setItem("currentUser", JSON.stringify(savedUser));
        alert("Login successful");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password");
    }
}