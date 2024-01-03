'use strict'

/* 
Crea un programa que incremente cada segundo un contador (incremento de 1) y que imprima en la consola cada 5 segundos el valor del contador.
Ejemplo de lo que debería imprimir en la consola:

Valor del contador: 5
Valor del contador: 10
...

Cuando tengas eso hecho, crea una función que se encargue de parar el temporizador anterior después de un tiempo arbitrario. Esta función recibirá un parámetro que corresponderá al tiempo en segundos. Cuando pare el temporizador, debe mostrar un mensaje en la consola indicando que se paró.


*/

/* function contadorDeNumeros(){

    let contador = 0;

    function incrementar(){
        contador++;
        return contador;
    }


    function valor(){
        return contador;
    }

    return {
        incrementar,  
        valor
    }

};

const miContador = contadorDeNumeros();
console.log(miContador.incrementar());
console.log(miContador.incrementar()); */

const cuentaRegresiva = () =>{

    let segundos = 0;

    const tiempoAgotado = () =>{

        if(segundos % 5 === 0 && segundos > 0){
            console.log(`Quedan ${segundos} segundos`);
            segundos+=5;

        }
        else{
            segundos++
        }

    }
    return tiempoAgotado;

}

const actulizarCuentaRegresiva = cuentaRegresiva();

const intervaloDeTiempo = setInterval(actulizarCuentaRegresiva,1000);

 function stopContador (){
    clearInterval(intervaloDeTiempo);
    console.log('Tiempo parado');
}

setTimeout(stopContador, 5000);





