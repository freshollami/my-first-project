function showMessage() {
    document.getElementById("message").textContent =
        "Thanks for reaching out! We will get back to you soon.";
}
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("message").textContent =
            "Thanks! Your message has been received.";

        contactForm.reset();
    });
}