![Web_Advanced_Portfolio (1)](https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/d83fc718-1d90-4a08-8df2-3ba1995aaf4d)

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
> 
> <img width="352" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/341a4353-8559-453a-9ec4-b2c1d1ff502d">

Elementen manipuleren:
> Het eerste element dat we manipuleren is de Sign Up / Log Out button in het script **isLoggedIn.js** , hierbij houden we rekening met **buttonState()**.
>
> <img width="328" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/ea7fe396-128e-474a-a464-72d9c8cf9e19">

Event aan een element koppelen:
> Het eerste element dat wordt ingeladen op de website waaraan een event vast hangt is **signUpLogInButton**, deze geeft de mogelijkheid om de user in te loggen of uit te loggen.
>
> <img width="304" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/3f9ced23-980d-45ca-b850-e70431f470ef">

Formulier valideren:
> Het formulier dat ik ga valideren is zowel de signUp als logIn pagina. Hierbij maak ik gebruik van verschillende vereisten maar met extra nood aan een **geldig email adres**. Het script vind je in **signUp.js**.
>
> <img width="353" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/591e4b8d-5a80-462d-8567-18862a351cc7">

Gebruiken van een constante:
> Dit wordt overal in mijn project gebruikt.
>
> <img width="379" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/b01719a7-981d-4f34-a772-09963eddb35a">

Gebruiken van template literals:
> Ik maak vooral gebruik van templte literals bij mijn **admin.js** script, hierbij kan ik makkelijk innerHTML en elementen toevoegen.
>
> <img width="563" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/4b43c4f9-318f-42ef-aa76-ee0437c9b6e2">

Destructuring:
> In de scripts **api.js** en **admin.js** maak ik gebruik van destructuring, bij de api om de gevraagde gegevens uit de api te halen en bij de admin om vanuit het email-adres de voornaam en achternaam te halen.
>
> <img width="494" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/a5946e4d-3102-4f8c-9810-0bff5c38f685">
> <img width="529" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/8225451a-8040-4f5d-8d1e-4c49f6c85e10">

Spread & Rest operator:
> De spread operator gebruik ik bij de **admin.js**. Hier kan ik makkelijk het gevraagd aantal kolommen maken d.m.v. een fucntie en hoef ik deze niet altijd apart aan te maken.
>
> <img width="386" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/0450dcfb-2836-4ffe-8e4b-d4acb3403ede">

Iteration over een array:
> In dezelfde functie als boven staand screenshot, maak ik gebruik van een iteration namelijk de **forEach()** en **For()**. Dit helpt mij bij het aanmaken van de header van mijn tabel naarmate de hoeveelheid kolommen en naam van de tabel.
>
> <img width="934" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/1371703b-f764-4c39-85c9-6ffed87cd911">

Arrow function:
> Ik gebruik arrow function zo wat door heel mijn project, omdat dit de snelste en beste manier is.
>
> <img width="259" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/7b2eaf4d-bfa9-460f-903d-8f0c45530d85">

Callback function:
> De callback function wordt benut bij de **api.js**. Omdat we elke keer een nieuwe stad kunnen opgeven en deze willen zien.
>
> <img width="320" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/b307b254-4137-429d-9290-809932e9d591">

Promise + Consumer method + Async & await:
> In de functie **getWeatherData()** maak ik zowel gebruik van een **promise**, die de gevraagde data ophaald.
> 
> Ook maak ik gebruik van **consumer methods**, **then()** dit wordt uitgevoerd van zodra de data beschikbaar is.
> 
> Ten slotte maak ik ook nog gebruik van **async & await**, de code gaat dus pas verder vanaf de promise voltooid is.
>
> <img width="575" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/7d30caad-ad05-446c-a6fa-2bb73fb5945f">

Self executing function:
> Vanaf dat men op de pagina **admin.html** komt wordt het script **localStorageToArray()** ingeladen. Dit maakt van de opgeslagen localStorage data een array met verschillende elementen.
> 
> <img width="400" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/7a522138-4752-45a6-9fc2-562988dc4b18">

> <img width="486" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/962b3ef4-23a6-4942-bed2-b1ccdb673b57">


Fetch om data op te halen + JSON manipuleren en weergeven:
> Ik gebruik de **fetch()** om de data van de api server af te hale en binnen te krijgen op mijn 'database / project'.
> Na dat we de gegevens hebben gaan we met de method **response.json()** de ontvangen data omzetten naar een javaScript-object.
>
> <img width="584" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/0a490263-97c4-4234-8741-3b5b512b7a78">

Basis CSS Animatie:
> Op 1 plek staat er een zeer basic css animatie, omdat ik dit niet zeer belangrijk vind op een web-pagina. Je kan deze vinden in de file **signUp.css** onder de class **#Login-card + slideIn**.
>
> <img width="241" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/411152bf-c683-42ca-bdec-67cc69a6ab13">

Gebruiken van een flexbox of CSS grid:
> Ik maar door heen het project gebruik van de flexbox, een voorbeeld hiervan vind je in de **footer** in de file **index.css**.
>
> <img width="295" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/4237008f-108a-4a12-8b8c-a450bf975b36">

Gebruik van LocalStorage:
> Als laatste requirement maak ik gebruik van localStorage om mijn inlog gegevens te bewaren en een email aan een wachtwoord te linken. Dit vind je in de file **signUp.js**.
>
> <img width="376" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/4499cecf-a055-40c1-bbd4-0c965da1a12f">

> <img width="409" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/e6fa2bc7-7f9d-474c-9802-54f03f6821b4">

## Used sources

**How to get a API key?**
> https://www.youtube.com/watch?v=MdIfZJ08g2I
<br />

**Problem with isLoggedIn() between pages?**
> <img width="568" alt="1" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/ab17546d-4610-4273-b86f-e6806fdd1cf5">

> <img width="572" alt="2" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/eae7633e-f739-4e53-adce-f9322bd01ae4">
<br />

**How to only accept a specific email?**
> <img width="549" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/56d280d8-c7f6-46e3-9ada-03d3a4fada5e">

> <img width="565" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/9a62f560-f6eb-4f15-b72f-7c6a20f0015f">
<br />

**Which API am I going to use?**
> https://www.youtube.com/watch?v=YHxj3LvZoLQ
<br />

**How can I easly validate a form?**
> https://www.youtube.com/watch?v=In0nB0ABaUk
<br />

**How can I open other pages in js?**
> <img width="393" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/ad305c3d-607f-4087-9a62-a32b6424bc97">

> <img width="535" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/0d91d40a-0d9f-44b5-a002-330a7b560cfe">


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
