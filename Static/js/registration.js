document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const termsCheckbox = document.getElementById('terms');
    if (!termsCheckbox.checked) {
        alert('You must agree to the terms of service before submitting.');
        return;
    }

    alert('Registration successful!');
    this.reset();
});
