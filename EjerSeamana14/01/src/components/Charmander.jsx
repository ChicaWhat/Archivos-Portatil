// Inicializando componente
const CharmanderImage = () => {
    // Creo un objeto con los estilos que quiero
    const style = {
        height: '200px',
        width: '200px',
    };
    // Retornamos el componente div y aplico el estilo que quiero para la imagen.
    return (
        <div style={style}>
            <img src="/charmander.png" alt="Charmander" />
        </div>
        
    );
};

export default CharmanderImage;