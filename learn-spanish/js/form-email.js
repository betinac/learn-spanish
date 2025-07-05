function formEmail() {
    const emailForm = document.getElementById('email-form');
    const message = emailForm.querySelector('.form-message');
    const loadingMessageEmail = emailForm.querySelector('.loadingEmailMessage');
    const submitEmailButton = emailForm.querySelector('button[type="submit"].send-email');
    const emailField = emailForm.querySelector('.email-input');

    if (!emailForm ) {
      console.debug("No email contact form on this page.");
      return;
    }

    emailForm.addEventListener('submit', async function(event) {
        /* Avoid submitting the form automatically */
        event.preventDefault();
        const emailValue = document.getElementById('email-input').value;

        /* Reset message */
        message.textContent = '';
        loadingMessageEmail.style.display = 'block';
        loadingMessageEmail.className = 'summary-message';
        /* Disable button */
        submitEmailButton.disabled = true;
        submitEmailButton.setAttribute('aria-disabled', 'true');

        const data = new URLSearchParams({ email: emailValue })

        try {
            const response = await fetch("https://email-lead-proxy.betinaperez.workers.dev", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: data
            });

            const result = await response.text();

            if (response.ok) {
                message.textContent = "🥳 Thanks! Your Kickstart is on its way!";
                message.className = 'summary-message confirmation-message';
                emailField.setAttribute('readonly', 'true');
                emailForm.reset();
                message.focus();
            } else {
                message.textContent = "⛔️ Please enter a valid email.";
                message.className = 'summary-message error-message';
                submitEmailButton.disabled = false;
                submitEmailButton.removeAttribute('aria-disabled');
            }
        } catch (error) {
            console.error(err);
            message.textContent = "⚠️ Something went wrong. Try again.";
            message.className = 'summary-message error-message';
            submitEmailButton.disabled = false;
            submitEmailButton.removeAttribute('aria-disabled');
        } finally {
            loadingMessageEmail.style.display = 'none';
        }
    });
}
document.addEventListener('DOMContentLoaded', formEmail )
