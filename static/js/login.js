document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    this.classList.toggle('fa-eye-slash');
});


function userLogin() {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    

    if (username === 'user' && email === '' && password === 'password') {
        window.location.href = './home.html';
    } else {
        alert('Invalid credentials');
    }
}