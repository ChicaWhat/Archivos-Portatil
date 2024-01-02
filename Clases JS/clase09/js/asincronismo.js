'use strict'

/* setTimeout

    setTimeout(callback, delay)

*/

// 1er ejemplo
function primerfuncionAsincronica () {
    setTimeout(function(){
        console.log("Hoy es día de asincronismo!");
    }, 3000);
}

// primerfuncionAsincronica();

// 2do ejemplo utilizando callback
function segundafuncionAsincronica () {
    const ejecutarDespuesDe2Segundos = funcionCallback => {

        // setTimeout(funcionCallback, 2000)

        setTimeout(() => {
            const retorno = funcionCallback();
            console.log(retorno);
        }, 2000);
    }

    const miCallback = () => {
        const retornarMensaje = "Han pasado 2 segundos!";
        return retornarMensaje;
    }

    ejecutarDespuesDe2Segundos(miCallback);

}

// segundafuncionAsincronica();

// 3er ejemplo utilizando función callback
function tercerafuncionAsincronica () {
    const saludarUsuario = (nombre, callback) => {
        console.log(`Hola, ${nombre}`);
        callback(nombre);
    }

    const despedirUsuario = nombre => {
        console.log(`Adios ${nombre}. Que tengas un buen día!`);
    }

    saludarUsuario("Pepe", nombreUsuario => {
        setTimeout(() => despedirUsuario(nombreUsuario), 2000);
    });
}

// tercerafuncionAsincronica();

// setInterval 
//1er ejemplo

function primerIntervalo(){
    const intervaloPrueba = setInterval(function(){
        console.log("Hoy es jueves!");
    }, 4000);
}

// primerIntervalo();

// 2do ejemplo

const cuentaRegresiva = () => {

    let segundos = 10;

    const tiempoAgotado = () => {

        if (segundos === 0) {
            console.log("El tiempo se ha agotado!");
            clearInterval(intervaloDeTiempo); // Detenemos el intervalo
        } else {
            console.log(`Quedan ${segundos} segundos`);
            segundos --;
        }

    }
    
    return tiempoAgotado;

}

const actualizarCuentaRegresiva = cuentaRegresiva();
const intervaloDeTiempo = setInterval(actualizarCuentaRegresiva, 1000);