/*const container = document.querySelector('.container');
const signupButton = document.querySelector('.signup-section header');
const loginButton = document.querySelector('.login-section header');

loginButton.addEventListener('click', () => {
    container.classList.add('active');
});

signupButton.addEventListener('click', () => {
    container.classList.remove('active');
});*/
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const signupButton = document.querySelector('.signup-section header');
    const loginButton = document.querySelector('.login-section header');
    const signupForm = document.getElementById('signup-form');
    const successMessage = document.getElementById('success-message');

    loginButton.addEventListener('click', () => {
        container.classList.add('active');
    });

    signupButton.addEventListener('click', () => {
        container.classList.remove('active');
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
            container.classList.add('active');
        }, 2000);
    });
});
