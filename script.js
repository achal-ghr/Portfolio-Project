document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from submitting by default
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for your message!");
    } else {
        alert("Please fill out all fields.");
    }
});

