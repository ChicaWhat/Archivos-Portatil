// Importamos las prop-types
import PropTypes from 'prop-types';
// También se puede importar la prop que vayas a usar seguro. Ejemplo:
// import { node } from 'prop-types'

// Inicializamos el componente. Utilizamos la prop children para recibir la etiqueta
// <h1> que definimos en el componente App.
const Header = ({ children }) => {
    return <header>{children}</header>;
};

// Validamos las props. La prop children habitualmente será un tipo 'node' (una etiqueta HTML).
Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;