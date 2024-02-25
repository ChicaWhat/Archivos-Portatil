// Importamos las prop-types.
import PropTypes from 'prop-types';

// Inicializamos el componente. Establecemos tres props, la primera de ellas
// tendrá como valor por defecto el string 'small'.
const Box = ({ size = 'small', color, children }) => {
    // Creamos un objeto con los estilos que queremos.
    const style = {
        small: {
            backgroundColor: color,
            height: '200px',
            width: '200px',
        },
        big: {
            backgroundColor: color,
            height: '600px',
            width: '600px',
        },
    };

    // Retornamos el componente div y aplicamos los estilos requeridos.
    return <div style={style[size]}>{children}</div>;
};

// Validamos las props.
Box.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Box;

// El prop children siempre va a adoptar el contenido que se le vaya a añadir a la etiqueta <Box></Box> (en este caso se llama así la etiqueta porque hemos creado una constante con ese nombre).
// Al retornar el componente div con el parámetro children, estamos diciendo que en el <div> va a haber lo que pongamos dentro de la etiqueta <Box>, porque esta contiene el prop children.