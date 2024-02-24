// Importamos las prop-types.
import PropTypes from 'prop-types';

// Importamos los estilos
import './Home.css';

// Componente Home que recibe como prop un array de tweets
// Ponemos dentro del parámetro del componente el prop tweets en forma de destructuring para capturarlas.
// Es decir, se envían desde el componente padre y se reciben en el componente hijo.
const Home = ({ tweets }) => {
  // Creamos un array de <li> para cada elemento del array de tweets
  // Todos los elementos de lista tengan la propiedad 'key' y tiene que tener un valor único para cada elemento de la lista

  const tweetsLi = tweets.map((tweet) => {
  
    return <li key={tweet.id}>{tweet.text}</li>
  })

    return (
      <main>
        <h2>Lista de Tweets</h2>
  
        <ul>
          {tweetsLi}
        </ul>
      </main>
    );
  };

// Validamos las props
Home.propTypes = {
  tweets: PropTypes.array.isRequired,
};

export default Home;