// function sendMail() {
//     let parms = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value
//     };

//     emailjs.send("service_bje43dx", "template_fge22ii", parms)
//         .then(function(response) {
//             alert("Email Sent Successfully!");
//         })
//         .catch(function(error) {
//             console.error("Failed to send email:", error);
//             alert("Failed to send email. Please try again.");
//         });
// }
// function sendMail() {
//     // Prevent form submission if accidentally triggered
//     event.preventDefault();

//     // Gather data from form fields
//     let parms = {
//         name: document.getElementById("name-field").value,
//         email: document.getElementById("email-field").value,
//         subject: document.getElementById("subject-field").value,
//         message: document.getElementById("message-field").value
//     };

//     // Send email using EmailJS
//     emailjs.send("service_bje43dx", "template_fge22ii", parms)
//         .then(function (response) {
//             alert("Email Sent Successfully!");
//         })
//         .catch(function (error) {
//             console.error("Failed to send email:", error);
//             alert("Failed to send email. Please try again.");
//         });
// }



// {/* <div class="col-lg-7">
//     <form id="contact-form" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
//         <div class="row gy-4">

//             <div class="col-md-6">
//                 <label for="name-field" class="pb-2">Your Name</label>
//                 <input type="text" name="name" id="name-field" class="form-control" required="">
//             </div>

//             <div class="col-md-6">
//                 <label for="email-field" class="pb-2">Your Email</label>
//                 <input type="email" class="form-control" name="email" id="email-field" required="">
//             </div>

//             <div class="col-md-12">
//                 <label for="subject-field" class="pb-2">Subject</label>
//                 <input type="text" class="form-control" name="subject" id="subject-field" required="">
//             </div>

//             <div class="col-md-12">
//                 <label for="message-field" class="pb-2">Message</label>
//                 <textarea class="form-control" name="message" rows="10" id="message-field" required=""></textarea>
//             </div>

//             <div class="col-md-12 text-center">
//                 <div class="loading">Loading</div>
//                 <div class="error-message"></div>
//                 <div class="sent-message">Your message has been sent. Thank you!</div>

//                 <button onclick="sendMail()" type="button">Send Message</button>
//             </div>

//         </div>
//     </form>
// </div> */}
function sendMail() {
    // Prevent default form behavior
    event.preventDefault();

    // Capture form data
    let parms = {
        name: document.getElementById("name-field").value,
        email: document.getElementById("email-field").value,
        subject: document.getElementById("subject-field").value,
        message: document.getElementById("message-field").value
    };

    // Send email using EmailJS
    emailjs.send("service_bje43dx", "template_fge22ii", parms)
        .then(function(response) {
            // Show success message
            document.querySelector(".sent-message").style.display = "block";
            document.querySelector(".error-message").style.display = "none";
        })
        .catch(function(error) {
            // Show error message
            document.querySelector(".error-message").textContent = "Failed to send email. Please try again.";
            document.querySelector(".error-message").style.display = "block";
            document.querySelector(".sent-message").style.display = "none";
            console.error("Failed to send email:", error);
        });
}
