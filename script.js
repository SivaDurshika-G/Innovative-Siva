// Popup Modal
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");

window.onload = function () {
    popup.style.display = "flex";
};

// Close the modal when the user clicks on the close button
closeBtn.onclick = function () {
    popup.style.display = "none";
};

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out.");
        event.preventDefault();  // Prevent form submission
    } else {
        alert("Message sent successfully!");
    }
});

// Smooth Scrolling for 'Let's Connect' Button
document.querySelector(".cta-btn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});