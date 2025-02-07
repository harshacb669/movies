document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle mobile menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Form validation
    document.getElementById("contact-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = event.target.name.value.trim();
        const email = event.target.email.value.trim();
        const message = event.target.message.value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Message sent successfully!");
        event.target.reset();
    });
});
