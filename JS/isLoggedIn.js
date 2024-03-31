const signUplogInButton = document.querySelector('.SignUpLogIn-button');

function setLoggedIn(value) 
{
    localStorage.setItem('isLoggedIn', value ? 'true' : 'false');
}

function getLoggedIn() 
{
    const loggedIn = localStorage.getItem('isLoggedIn');

    if (loggedIn === null) 
    {
        setLoggedIn(false);
        return false;
    }
    return loggedIn === 'true';
}

function buttonState()
{
    if(getLoggedIn())
    {
        signUplogInButton.innerHTML = 'Log Out';
        signUplogInButton.style.backgroundColor = '#f44336';
    }
    else if(!getLoggedIn())
    {
        signUplogInButton.innerHTML = 'Sign Up';
        signUplogInButton.style.backgroundColor = '#4CAF50';
    }
}
export { setLoggedIn, getLoggedIn, signUplogInButton, buttonState};