// Importamos las prop-types.
import PropTypes from 'prop-types';

// Inicializamos el componentes. Recibe por props un personaje.
const CharItem = ({ char }) => {
    return (
        <li>
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
        </li>
    );
};

// Validamos las props.
CharItem.propTypes = {
    char: PropTypes.object.isRequired,
};

export default CharItem;
