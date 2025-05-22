document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const enquiryType = document.getElementById('enquiry').value;
            const message = document.getElementById('message').value;

            // Validate phone number
            if (!/^\d{10}$/.test(phone)) {
                showStatus('Please enter a valid 10-digit phone number', 'error');
                return;
            }

            // Construct email body
            const emailBody = `Name: ${name}
Phone: ${phone}
Email: ${email}
Enquiry Type: ${enquiryType}

Message:
${message}`;

            // Create mailto link
            const mailtoLink = `mailto:demo@gmail.com?subject=New Enquiry from ${name}&body=${encodeURIComponent(emailBody)}`;

            // Create and click a temporary link
            const tempLink = document.createElement('a');
            tempLink.href = mailtoLink;
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);

            // Show success message
            showStatus('Opening your email client...', 'success');

            // Reset form after a short delay
            setTimeout(() => {
                contactForm.reset();
            }, 1000);
        });
    }

    function showStatus(message, type) {
        formStatus.style.display = 'block';
        formStatus.className = `mt-3 alert alert-${type === 'error' ? 'danger' : 'success'}`;
        formStatus.textContent = message;

        // Hide status after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
});
