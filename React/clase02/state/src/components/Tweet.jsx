// Importamos las prop-types.
import PropTypes from 'prop-types';

// Inicializamos el componentes. Recibimos un tweet por props.
const Tweet = ({ tweet }) => {
    return <li>{tweet.text}</li>;
};

// Validamos las props.
Tweet.propTypes = {
    tweet: PropTypes.object.isRequired,
};

export default Tweet;
