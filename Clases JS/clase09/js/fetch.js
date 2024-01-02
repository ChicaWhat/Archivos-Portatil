'use strict'

/* FETCH

    fetch("https://...")
        .then() --> obtenemos los datos de la API en formato JSON y los convertimos a objeto literal
        .then() --> acá haremos lo que nosotros queramos con los datos que ya fueron convertidos a objeto literal. 
        .catch()

*/

// 1er ejemplo con fetch() --> obtener datos de usuarios random 
function obtenerDatosDeUsuarios(){

    fetch("https://randomuser.me/api")

        .then(function (response) {
            return response.json();
        })

        .then(function(userData){
            console.log(userData.results[0].email);
            console.log(userData.results[0].location.country)
        })

}

obtenerDatosDeUsuarios();

// 2do ejemplo con la api de pokemon (1er versión)
function pokemonDataV1(){

    fetch("https://pokeapi.co/api/v2/pokemon")

        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log("--- Pokemon: Versión 1 ---");
            console.log(`Nombre: ${data.results[3].name}`);
        })
}

pokemonDataV1();

// 3er ejemplo con la api de pokemon (2da versión)
const pokemonDataV2 = pokemonName => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        .then( response => {
            // console.log(response.ok);
            if(!response.ok){
                throw new Error("No encontamos información bajo ese nombre de Pokemon");
            }
            return response.json();
        })

        .then(data => {
            console.log("--- Pokemon: Versión 2 ---");
            console.log(`Nombre: ${data.name}`);
            console.log(`Tipo de Pokemon: ${data.types[0].type.name}`);

            for ( let habilidades of data.abilities){
                console.log(`Habilidad: ${habilidades.ability.name}`)
            }
        })

        .catch(error => {
            console.error(error.message);
        })

}

pokemonDataV2("nidorino");

// DESAFÍO DE TAREA: utilizando el ejercicio anterior que es la versión 2 de pokemon, agregar y mostrar las habilidades del pokemon que se definido con su nombre a través del argumento de la función. 

