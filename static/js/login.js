document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    this.classList.toggle('fa-eye-slash');
});

// hundles login between user and admin
document.getElementById('userLogin').addEventListener('click', function() {
    // Set the form action to the user login route
    document.getElementById('loginForm').action = '/login';
    document.getElementById('loginForm').submit(); // Submit the form
});

document.getElementById('adminLogin').addEventListener('click', function() {
    // has been set to the admin login route
    document.getElementById('loginForm').action = '/admin_login';
    document.getElementById('loginForm').submit(); // Submit the form
});

//Login Functionalities will be hundled by the backend

// function userLogin() {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
    

//     if (username === 'user' && email === '' && password === 'password') {
//         window.location.href = './home.html';
//     } else {
//         alert('Invalid credentials');
//     }
// }