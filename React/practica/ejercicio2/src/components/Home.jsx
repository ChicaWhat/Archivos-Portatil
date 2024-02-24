// Importamos las prop-types.
import PropTypes from 'prop-types';

// Inicializamos el componente y recibimos como props un array de tareas.
const Home = ({ tasks }) => {
    return (
        <main>
            <h2>Lista de tareas</h2>

            <ul>
                {tasks.map((task) => {
                    return <li key={task.id}>{task.text}</li>;
                })}
            </ul>
        </main>
    );
};

// Validamos las props.
Home.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default Home;
