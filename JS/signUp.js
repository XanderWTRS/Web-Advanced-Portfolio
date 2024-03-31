import { setLoggedIn, buttonState } from './isLoggedIn.js';

const signUpForm = document.getElementById('signUpForm');
const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const signUpBtn = document.getElementById('signup-button');
const homeButton = document.getElementById('home-button');
const loginCard = document.getElementById('Login-card');
const wrapper = document.getElementById('wrapper');

const logInForm = document.getElementById('logInForm');
const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');
const loginBtn = document.getElementById('login-button');

signUpBtn.addEventListener('click', () =>
{
    signUpForm.style.display = 'block';
    logInForm.style.display = 'none';
});

loginBtn.addEventListener('click', () =>
{
    signUpForm.style.display = 'none';
    logInForm.style.display = 'block';
});

homeButton.addEventListener('click', () =>
{
    window.location.href = '../index.html';
    setLoggedIn(true);
    buttonState();
});

signUpForm.addEventListener('submit', (e) => 
{
    e.preventDefault();
    validateInputs();

    if(fName.parentElement.classList.contains('success') && lName.parentElement.classList.contains('success') && email.parentElement.classList.contains('success') && password.parentElement.classList.contains('success') && password2.parentElement.classList.contains('success'))
    {
        let fNameValue = fName.value;
        const titel = document.getElementById('Login-title');

        wrapper.style.display = 'none';

        titel.innerHTML = `Welcome ${fNameValue}!`;
        loginCard.style.display = 'flex';

        const emailLocal = email.value.trim();
        const passwordLocal = password.value.trim();
        
        localStorage.setItem(emailLocal, passwordLocal);
    }
});

logInForm.addEventListener('submit', (e) =>
{
    e.preventDefault();
    loginCredentials();

    if(emailLogin.parentElement.classList.contains('success') && passwordLogin.parentElement.classList.contains('success'))
    {
        const emailLocal = emailLogin.value.trim();
        const passwordLocal = passwordLogin.value.trim();

        if(localStorage.getItem(emailLocal) === passwordLocal)
        {
            window.location.href = '../index.html';
            setLoggedIn(true);
            buttonState();
        }
        else
        {
            setErrorFor(emailLogin, 'Email and password do not match');
            setErrorFor(passwordLogin, 'Email and password do not match');
        }
    }
});

const setErrorFor = (input, message) =>
{
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccessFor = (input) =>
{
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = (email) =>
{
    const char = /^[a-zA-Z]+\.[a-zA-Z]+@student\.ehb\.be$/;
    return char.test(String(email).toLowerCase());
}

const validateInputs = () =>
{
    const firstNameValue = fName.value.trim();
    const lastNameValue = lName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(firstNameValue === '')
    {
        setErrorFor(fName, 'First Name cannot be blank');
    }
    else setSuccessFor(fName);

    if(lastNameValue === '')
    {
        setErrorFor(lName, 'Last Name cannot be blank');
    }
    else setSuccessFor(lName);

    if(emailValue === '')
    {
        setErrorFor(email, 'Email cannot be blank');
    }
    else if(!isValidEmail(emailValue))
    {
        setErrorFor(email, 'Email is not valid');
    }
    else if(localStorage.getItem(emailValue) !== null)
    {
        setErrorFor(email, 'Email already exists');
    }
    else setSuccessFor(email);

    if(passwordValue === '')
    {
        setErrorFor(password, 'Password cannot be blank');
    }
    else if(passwordValue.length < 6)
    {
        setErrorFor(password, 'Password must be at least 6 characters long');
    }
    else setSuccessFor(password);

    if(password2Value === '')
    {
        setErrorFor(password2, 'Password cannot be blank');
    }
    else if(password2Value !== passwordValue)
    {
        setErrorFor(password2, 'Passwords do not match');
    }
    else setSuccessFor(password2);
}

const loginCredentials = () =>
{
    const emailLocal = emailLogin.value.trim();
    const passwordLocal = passwordLogin.value.trim();

    if(emailLocal === '')
    {
        setErrorFor(emailLogin, 'Email cannot be blank');
    }
    else if(!isValidEmail(emailLocal))
    {
        setErrorFor(emailLogin, 'Email is not valid');
    }
    else setSuccessFor(emailLogin);

    if(passwordLocal === '')
    {
        setErrorFor(passwordLogin, 'Password cannot be blank');
    }
    else setSuccessFor(passwordLogin);
}