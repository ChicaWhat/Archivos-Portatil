// Importamos las prop-types.
import PropTypes from 'prop-types';

// Inicializamos el componentes. Utilizamos la prop children para recibir
// la etiqueta <h1> que definimos en el componente App.
const Header = ({ children }) => {
    return <header>{children}</header>;
};

// Validamos las props. La prop children habitualmente será de tipo "node" (una
// etiqueta html).
Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;
