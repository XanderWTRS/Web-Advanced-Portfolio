import { setLoggedIn, getLoggedIn, signUplogInButton, buttonState } from './isLoggedIn.js';
buttonState();

signUplogInButton.addEventListener('click', () =>
{
    if(getLoggedIn())
    {
        setLoggedIn(false);
        buttonState();
    }
    else
    {
        window.location.href = '/HTML/signUp.html';
    }
});

const pageButton = document.getElementById('pageButton');
const apiButton = document.getElementById('apiButton');
const adminButton = document.getElementById('adminButton'); 

pageButton.addEventListener('click', () =>
{
    window.location.href = '../index.html';
});

apiButton.addEventListener('click', () =>
{
    if(getLoggedIn())
    {
        window.location.href = '../HTML/api.html';
    }
    else
    {
        window.location.href = '../HTML/signUp.html';
    }
});

adminButton.addEventListener('click', () =>
{
    if(getLoggedIn())
    {
        window.location.href = '../HTML/admin.html';
    }
    else
    {
        window.location.href = '../HTML/signUp.html';
    }
});