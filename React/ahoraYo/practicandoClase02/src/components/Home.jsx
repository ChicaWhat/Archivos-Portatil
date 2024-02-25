// Importamos los componentes
import Tweet from './Tweet';

// Importamos los hooks
//Para poder crear una variable en el estado de React debemos de usar el hook 'useState'
import { useEffect, useState } from 'react';


// Inicializamos el componente
// Vamos a crear un componente que contenga nuestra <li>
const Home = () => {
    // Todas las variables del State se deben de crear dentro del STATE
    // Creamos un array de tweets en el State de React. Tratamos de obtener el array de tweets del localStorage.
    // Si no hay, definimos un array vacío
    const [tweets, setTweets] = useState(
        JSON.parse(localStorage.getItem('tweets')) || []
    );
        
    // Creamos una variable en el State para almacenar el valor del textarea
    const [text, setText] = useState('');

    // Creamos un useEffect que se ejecutará cada vez que haya un cambio en el array de tweets
    // con la finalidad de actualizar el localStorage
    useEffect(() => {
        // Actualizamos el array de tweets en el localStage
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }, [tweets]);

    // Función que maneja el envío del formulario
    const addTweet = (event) => {
        // Prevenimos el comportamiento por defecto del formulario. SIEMPRE se debe de escribir esta función
        event.preventDefault();

        // Creamos el nuevo tweet.
        const tweet = {
            id: tweets.length + 1,
            text
        };

        // Creamos un nuevo array donde figuren todos los tweets que había inicialmente y añadimos el nuevo tweet
        const newTweets = [tweet, ...tweets];

        // Actualizamos los tweets en el State con el nuevo array
        setTweets(newTweets);

        // Vaciamos el textarea
        setText('')
    };

    return (
        <main>
            <h2>Lista de Tweets</h2>

            <form onSubmit={addTweet}>
                <textarea 
                    // Hay que especificar SIEMPRE este valor
                    value={text}
                    // Cada vez que haya un cambio en textarea se va a guardar en la variable text y setText
                    onChange={(event) => setText(event.target.value)} 
                    placeholder='Escribe aquí tu tweet...' 
                    required
                />
                    <button>Enviar</button>
            </form>

            <ul>
                {/* Utilizamos el método sort para ordenar los tweets por id del más reciente al más antiguo */}
                {tweets
                    .sort((a, b) => b.id - a.id)
                    .map((tweet) => {
                        // Retornamos el componente tweet. 
                        // Es importante definir en este punto el atributo key y pasar por props el tweet
                        return <Tweet key={tweet.id} tweet={tweet} />
                })}
            </ul>
        </main>
    );
};

export default Home;