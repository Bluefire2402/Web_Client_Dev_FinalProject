let user = JSON.parse(localStorage.getItem("user"));
const profileDiv = document.getElementById("profile-info");
function displayProfile() {
    if (!user) {
        profileDiv.innerHTML = "<p>No users are logged.</p>";
        return;
    }
    profileDiv.innerHTML = `
        <p><strong>Name:</strong> ${user.name || "n/a"}</p>
        <p><strong>Email:</strong> ${user.email}</p>
    `;
    document.getElementById("name").value = user.name || "";
    document.getElementById("email").value = user.email;
}
function updateProfile() {
    const newName = document.getElementById("name").value.trim();
    const newEmail = document.getElementById("email").value.trim();
    if (!newEmail) {
        alert("Email cannot be empty");
        return;
    }
    user.name = newName;
    user.email = newEmail;
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile updated");
    displayProfile();
}
function logout() {
    localStorage.removeItem("user");
    alert("Logged out");
    window.location.href = "login.html";
}
displayProfile();
function Darkmode() {
document.body.classList.toggle("dark-mode")
}