// Initialize EmailJS
emailjs.init({
    publicKey: "pm8CzKhrYxiw6myPX"
});

// Get form
const form = document.getElementById("contact-form");

// Submit form
form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_yeyme18",
        "template_hqfqg5l",
        this
    )
    .then(function () {

        alert("Message sent successfully!");
    

        form.reset();

    })
    .catch(function (error) {

        alert("Failed to send message.");

        console.log(error);

    });

});