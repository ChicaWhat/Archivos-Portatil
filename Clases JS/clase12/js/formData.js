'use strict'

// Interface FormData: nos permite crear objetos que representan los campos de un formulario (existente en el DOM o uno creado desde FormData) y que nos permite obtener los datos ingresados por el usuario para luego enviarlos a un servidor fácilmente a través de un fetch().

const miFormulario = document.getElementById('miFormulario');

    miFormulario.addEventListener('submit', (event) => { //evento submit: esto significa que cuando el formulario se envíe (por ejemplo, al hacer clic en el botón de envío), se ejecutará la función proporcionada.

    event.preventDefault(); // vamos a prevenir el comportamiento predeterminado de recargar la página cuando se haga envío del formulario.

    const formData = new FormData(miFormulario); // creamos un objeto con new FormData() donde recopilamos automáticamente los valores de los campos del formulario y lo guardamos en una variable formData.

    //   console.log(formData); // Verificar qué muestra por consola en la variable. 

    // Obtener los valores de los campos del formulario
    const name = formData.get('name'); // con get recuperamos un valor
    const email = formData.get('email');

    // Realizar acciones con los datos
    console.log('Nombre:', name);
    console.log('Email:', email);

    // A esta altura estaríamos enviando los datos al servidor utilizando fetch

    document.querySelector('section').style.display = 'none';  // Una vez que se hace envío de los datos el formulario se debe ocultar y luego aparecerá un mensaje en color verde que diga "El formulario se ha enviado con éxito"

    const mensajeExitoso = document.createElement('p');
    mensajeExitoso.textContent = '¡El formulario se ha enviado con éxito! ✅';
    mensajeExitoso.classList.add('exitoMensaje'); // Agregamos la clase 'exitoMensaje' al elemento <p>
    document.body.appendChild(mensajeExitoso);
}); 


