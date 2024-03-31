![💻Web_Advanced_Portfolio](https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/1154937e-1ac9-43e5-8669-4daba1b91451)

# Web Advanced Portfolio
![Static Badge](https://img.shields.io/badge/Visual_code-v1.87-blue) ![Static Badge](https://img.shields.io/badge/Node.js-v21.4-green)

This is my project for the course **Web Advanced**
The project contains a few features such as:
- Sign Up / Login page
- API
- Admin page



## Requirements
Here is the list of required items in the project:
- Elementen selecteren
- Elementen manipuleren
- Event aan een element koppelen
- Formulier valideren
- Gebruiken van een constante
- Gebruiken van template literals
- Destructuring
- Spread & Rest operator
- Iteration over een array
- Arrow function
- Callback function
- Promise
- Consumer methods
- Async & Await
- Self executing function
- Fetch om data op te halen
- JSON manipuleren en weergeven
- Basis CSS Animatie
- Gebruiken van een flexbox of CSS grid
- Gebruik van LocalStorage

## Requirements in Portfolio

Elementen selecteren:
> Dit wordt zo wat overal gebruikt maar het eerste voorkomen hiervan is in **index.js**.
> <img width="352" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/341a4353-8559-453a-9ec4-b2c1d1ff502d">

Elementen manipuleren:
> Het eerste element dat we manipuleren is de Sign Up / Log Out button in het script **isLoggedIn.js** , hierbij houden we rekening met **buttonState()**.
>
> <img width="328" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/ea7fe396-128e-474a-a464-72d9c8cf9e19">

Event aan een element koppelen:
> Het eerste element dat wordt ingeladen op de website waaraan een event vast hangt is **signUpLogInButton**, deze geeft de mogelijkheid om de user in te loggen of uit te loggen.
>
> <img width="304" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/3f9ced23-980d-45ca-b850-e70431f470ef">




## Extra 
If you want to start the website while **already logged in** change the code in isLoggedIn.js to ->
```js
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
```

## License
**This website is only for personal use.**
