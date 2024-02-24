// Inicializamos el componente.
const App = () => {
    // Función que retorna un valor entero aleatorio entre 0 y 255.
    const randomValue = () => Math.floor(Math.random() * 256);

    // Creamos nuestro propio estilo para establecer el color de fondo del main.
    const style = {
        backgroundColor: `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`,
    };

    return (
        <main style={style}>
            <h1>Probando cositas con React</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                nihil, numquam corrupti nesciunt explicabo aut odit optio, odio
                hic facere fugit. Culpa similique nesciunt vel. Et possimus,
                consequatur quia omnis corrupti ducimus autem eos dolorum itaque
                libero, tempore in magnam! Debitis consequatur, quisquam
                reiciendis amet itaque optio ipsum sint libero?
            </p>
        </main>
    );
};

export default App;
