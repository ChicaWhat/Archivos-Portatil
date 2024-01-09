'use strict'

//! Este método es otra opción para conseguir la posición del usuario

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
         console.log("Latitude: " + position.coords.latitude);
         console.log("Longitude: " + position.coords.longitude);
    });
 } else {
    console.log("Geolocation is not supported by this browser.");
 }

 
// *¿Es exactamente lo mismo usar getCurrentPosition que watchPosition?
// !No, no es lo mismo. getCurrentPosition() te muestra la posición del usuario, mientras que watchID() te muestra automaticamente la posición cuando cambia la ubicación el dispositivo


// const watchID = navigator.geolocation.watchPosition((position) => {
//     console.log(`Latitude: ${position.coords.latitude}`);
//     console.log(`Longitude: ${position.coords.longitude}`);
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
// })



// TODO Esta función sirve para dejar de ver la localización del usuario
//* const clearID = navigator.geolocation.clearWatch(watchID);

/*  fetch(api)
.then(response => response.json())
.then(data => console.log(data));
document.getElementById('.geoButton').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            fetch(api)
            .then(response => response.json())
            .then(data => console.log(data));
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
 }); */

 // MI PROPIO CÓDIGO !! //

// `https://api.open-meteo.com/v1/forecast?$(latitude)=52.52&$(longitude)=13.41&current=rain&minutely_15=temperature_2m,rain&hourly=temperature_2m,precipitation,rain&forecast_days=14&forecast_minutely_15=48` Así debería de quedar la API para que agarre la posición de cada dispositivo según donde se encuentre??

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=rain&minutely_15=temperature_2m,rain&hourly=temperature_2m,precipitation,rain&forecast_days=14&forecast_minutely_15=48