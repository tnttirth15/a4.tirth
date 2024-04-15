//# sourceMappingURL=contact.js.map
"use strict";

// Function to submit the form
function submitForm() {
    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate form inputs
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // Display form data in modal
    const modalContent = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
    document.getElementById('modalContent').innerHTML = modalContent;

    // Reset form
    document.getElementById('contactForm').reset();

    // Show modal
    $('#myModal').modal('show');

    // Timed redirection after 5 seconds
    setTimeout(() => {
        window.location.href = "index.html"; // Redirect to Home page
    }, 5000);
}

// Append footer navigation to the body
document.body.appendChild(footerNav);

const myContacts = [
    {
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890"
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "987-654-3210"
    }
];

// Insert the new contacts into the "contacts" collection
db.contacts.insertMany(myContacts);