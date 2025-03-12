// Get form and input elements
const form = document.getElementById('validationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const successMessage = document.getElementById('successMessage');

// Error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');

// Regular Expressions for validation
const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\d{10,15}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Full Name Validation
    if (!nameRegex.test(fullName.value)) {
        isValid = false;
        nameError.textContent = "Full Name must contain only letters and spaces.";
        fullName.style.borderColor = 'red';
    } else {
        nameError.textContent = "";
        fullName.style.borderColor = '';
    }

    // Email Validation
    if (!emailRegex.test(email.value)) {
        isValid = false;
        emailError.textContent = "Please enter a valid email address.";
        email.style.borderColor = 'red';
    } else {
        emailError.textContent = "";
        email.style.borderColor = '';
    }

    // Phone Validation
    if (!phoneRegex.test(phone.value)) {
        isValid = false;
        phoneError.textContent = "Phone number must be between 10 and 15 digits.";
        phone.style.borderColor = 'red';
    } else {
        phoneError.textContent = "";
        phone.style.borderColor = '';
    }

    // Password Validation
    if (!passwordRegex.test(password.value)) {
        isValid = false;
        passwordError.textContent = "Password must be at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number.";
        password.style.borderColor = 'red';
    } else {
        passwordError.textContent = "";
        password.style.borderColor = '';
    }

    // Display success message if all fields are valid
    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
    } else {
        successMessage.textContent = "";
    }
});

// Real-time validation (optional)
fullName.addEventListener('input', function() {
    if (!nameRegex.test(fullName.value)) {
        nameError.textContent = "Full Name must contain only letters and spaces.";
    } else {
        nameError.textContent = "";
    }
});

// Repeat for other fields...
