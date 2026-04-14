document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (name === "" || email === "" || message === "") {
        alert("Please. fullfil all the spaces"); return;
    }
    document.getElementById("successmessage").classList.remove("d-none");
    this.reset();
});
function Darkmode() {
document.body.classList.toggle("dark-mode")
}