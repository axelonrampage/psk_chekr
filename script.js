const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("toggle-password");
const strengthIndicator = document.getElementById("password-strength");

function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show";
    }
}

// Define automata patterns Main deal
const patterns = [
    /[A-Z]/,    // Uppercase letter
    /[a-z]/,    // Lowercase letter
    /\d/,       // Digit
    /[\W_]/     // Special character
];

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    
    // Count the number of patterns that matchn
    const matchingPatterns = patterns.reduce((count, pattern) => {
        return count + (pattern.test(password) ? 1 : 0);}, 0);

    // Determine the password strength based on the number of matching patterns
    if (matchingPatterns === 0) {
        strengthIndicator.textContent = "Very Weak";
    } else if (matchingPatterns === 1) {
        strengthIndicator.textContent = "Weak";
    } else if (matchingPatterns === 2) {
        strengthIndicator.textContent = "Moderate";
    } else if (matchingPatterns === 3) {
        strengthIndicator.textContent = "Strong";
    } else {
        strengthIndicator.textContent = "Very Strong";
    }
});
