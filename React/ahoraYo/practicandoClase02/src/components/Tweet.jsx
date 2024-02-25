// Importamos las prop-types
import PropTypes from 'prop-types';

// Inicializamos el componente. Recibimos un tweet de prop
const Tweet = ({ tweet }) => {
    return <li>{tweet.text}</li>
};

// Validamos las props. La prop tweet va a ser un objeto
Tweet.propTypes = {
    tweet: PropTypes.object.isRequired,
};

export default Tweet;