import {signUplogInButton, buttonState } from './isLoggedIn.js';
buttonState();

signUplogInButton.addEventListener('click', () =>
{
    window.location.href = '../index.html';
});

//--------------API----------------

//https://www.youtube.com/watch?v=MdIfZJ08g2I

const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card'); 

const apiKey = "24a4a929e96fcbdf1dc0e71a0758dbaa";

weatherForm.addEventListener("submit", event => 
{
    event.preventDefault();
    const city = cityInput.value;

    if (city) 
    {
        getWeatherData(city)
            .then(weatherData => 
            {
                displayWeatherInfo(weatherData);
            })
            .catch(error => 
            {
                displayError(error);
            });
    } 
    else 
    {
        displayError("Please enter a city name");
    }
});

async function getWeatherData(city) 
{
    return new Promise((resolve, reject) => 
    {
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        fetch(apiURL)
            .then(response => 
            {
                if (!response.ok) 
                {
                    throw new Error("Could not fetch weather data");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function displayWeatherInfo(data)
{
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data; 
    card.textContent = "";
    
    const weatherInfo = `
        <div class="flexbox">
        <h2 class="cityDisplay">${city}</h2>
        <p class="tempDisplay">${(temp - 273.15).toFixed(1)}°C</p>
        </div>
        <div class="flexbox">
        <p class="descDisplay">${description}</p>
        <p class="humDisplay">Hum: ${humidity}%</p>
        </div>
        <img class="gifDisplay" src="${getWeatherGif(id)}" alt="weather icon">`;

    card.innerHTML = weatherInfo;
    card.style.display = "flex";
}

function getWeatherGif(weatherId)
{
    switch(true)
    {
        case (weatherId >= 200 && weatherId < 300):
            return "../IMG/thunder-icon.gif";
        case (weatherId >= 300 && weatherId < 400):
            return "../IMG/rain-icon.gif";
        case (weatherId >= 500 && weatherId < 600):
            return "../IMG/rain-icon.gif";
        case (weatherId >= 600 && weatherId < 700):
            return "../IMG/snow-icon.gif";
        case (weatherId >= 700 && weatherId < 800):
            return "../IMG/mist-icon.gif";
        case (weatherId === 800):
            return "../IMG/sun-icon.gif";
        case (weatherId >= 801 && weatherId < 810):
            return "../IMG/cloudy-icon.gif";

        default: 
            return "❓";
    }
}

function displayError(message)
{
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}    