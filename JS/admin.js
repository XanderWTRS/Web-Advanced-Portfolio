import {signUplogInButton, buttonState } from './isLoggedIn.js';
buttonState();

signUplogInButton.addEventListener('click', () =>
{
    window.location.href = '../index.html';
});
//----------------ADMIN PAGE------------------------------------------------------------------------

const clearLS = document.getElementById('resetLocalStorage');
const showAll  = document.getElementById('showAll');
const emailPassButton = document.getElementById('emailPassword');

const tbody = document.getElementById('tbody');
const tr = document.getElementById('tr');

localStorageToArray();
createTable('First name' , 'Last name', 'Email', 'Password');

clearLS.addEventListener('click', () =>
{
    localStorage.clear();
    window.location.href = '../index.html';
});

showAll.addEventListener('click', () =>
{
    createTable('First name' , 'Last name', 'Email', 'Password');
});

emailPassButton.addEventListener('click', () =>
{       
    createTable('Email', 'Password');
});

function createTable(...columns)
{
    const dataBase = localStorageToArray();
    tr.innerHTML = '';
    tbody.innerHTML = '';

    columns.forEach(column => {tr.innerHTML += `<th>${column}</th>`;});

    if(columns.length === 4)
    {
        for(let i = 0; i < dataBase.length; i++)
        {
            tbody.innerHTML +=`<tr><td>${dataBase[i].newFN}</td><td>${dataBase[i].newLN}</td><td>${dataBase[i].email}</td><td>${dataBase[i].password}</td></tr>`;
        }
    }
    else
    {
        for(let i = 0; i < dataBase.length; i++)
        {
            tbody.innerHTML +=`<tr><td>${dataBase[i].email}</td><td>${dataBase[i].password}</td></tr>`;
        }
    }
}

function localStorageToArray()
{
    const dataBase = [];
    for(let i = 0; i < localStorage.length; i++)
    {
        if(localStorage.key(i) === 'isLoggedIn')
        {
            continue;
        }
        if(localStorage.key(i) === 'debug')
        {
            continue;
        }

        const email = localStorage.key(i);
        const password = localStorage.getItem(email);
        const [firstName, lastName] = email.split('@')[0].split('.');

        const newFN = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        const newLN = lastName.charAt(0).toUpperCase() + lastName.slice(1);

        dataBase.push({ newFN, newLN, email, password });
    }
    return dataBase;
}