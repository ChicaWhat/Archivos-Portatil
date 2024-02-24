// Importamos los hooks.
import { useEffect, useState } from 'react';

// Importamos los componentes.
import CharItem from './CharItem';

// Inicializamos el componentes.
const Home = () => {
    // Creamos un array donde almacenaremos los personajes en el State.
    const [characters, setCharacters] = useState([]);

    // Almacenamos las URL de página siguiente y página anterior. Si se trata de un valor NULL significa que no hay.
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);

    // Utilizamos un useEffect para hacer una petición al API en busca de los personajes. Un array
    // de dependencias vacío implica que el callback ligado a este useEffect se ejecutará únicamente
    // durante la etapa de montado del componente.
    useEffect(() => {
        // Función que realiza la petición.
        const getChars = async () => {
            try {
                // Obtenemos el response.
                const res = await fetch(
                    'https://rickandmortyapi.com/api/character'
                );

                // Obtenemos el body.
                const body = await res.json();

                // Establecemos el array de personajes.
                setCharacters(body.results);

                // Establecemos la URL de la página siguiente y anterior.
                setPrevPage(body.info.prev);
                setNextPage(body.info.next);
            } catch (err) {
                console.error(err);
            }
        };

        // Llamamos a la función.
        getChars();
    }, []);

    // Función que me permite acceder a la página anterior o a la página siguiente.
    const changePage = async (url) => {
        try {
            // Si la URL de la página no es nula realizamos la búsqueda.
            if (url) {
                const res = await fetch(url);

                const body = await res.json();

                // Establecemos el array de personajes de la página anterior o siguiente.
                setCharacters(body.results);

                // Actualizamos la URL de la página siguiente y anterior.
                setPrevPage(body.info.prev);
                setNextPage(body.info.next);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <main>
            <h2>Lista de personajes</h2>

            {/* Dado que no queremos hacer uso del evento, omitimos dicho parámetro. */}
            {/* Mostramos los botones únicamente si hay página anterior o siguiente. */}
            {prevPage && (
                <button onClick={() => changePage(prevPage)}>
                    Pág. anterior
                </button>
            )}

            {nextPage && (
                <button onClick={() => changePage(nextPage)}>
                    Pág. siguiente
                </button>
            )}

            <ul>
                {characters.map((char) => {
                    return <CharItem key={char.id} char={char} />;
                })}
            </ul>
        </main>
    );
};

export default Home;
