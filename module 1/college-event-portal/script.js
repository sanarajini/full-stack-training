// College Event Portal JavaScript

// Registration Form Validation
const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const department = document.getElementById("department").value;
        const year = document.getElementById("year").value;
        const selectedEvent = document.getElementById("event").value;
        const formMessage = document.getElementById("formMessage");

        // Clear previous message
        formMessage.textContent = "";

        // Name validation
        if (name === "") {
            formMessage.textContent = "Please enter your name.";
            return;
        }

        // Email validation
        if (email === "") {
            formMessage.textContent = "Please enter your email.";
            return;
        }

        // Simple email check
        if (!email.includes("@") || !email.includes(".")) {
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        // Phone validation
        if (phone === "") {
            formMessage.textContent = "Please enter your phone number.";
            return;
        }

        if (phone.length !== 10 || isNaN(phone)) {
            formMessage.textContent =
                "Please enter a valid 10-digit phone number.";
            return;
        }

        // Department validation
        if (department === "") {
            formMessage.textContent = "Please select your department.";
            return;
        }

        // Year validation
        if (year === "") {
            formMessage.textContent = "Please select your year.";
            return;
        }

        // Event validation
        if (selectedEvent === "") {
            formMessage.textContent = "Please select an event.";
            return;
        }

        // Successful registration
        formMessage.textContent =
            "Registration successful! Thank you, " + name + ".";

        // Clear the form
        registrationForm.reset();
    });
}


// Page Load Message
console.log("College Event Portal Loaded Successfully");