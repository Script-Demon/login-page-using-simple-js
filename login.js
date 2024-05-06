// login.js
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'web_dev') {
        alert('Login successful!'); // Replace with your desired action (e.g., redirect to another page)
        location.reload(); // For simplicity, reload the page
    } else {
        document.getElementById('error-message').textContent = 'Invalid credentials. Please try again.';
    }
}
