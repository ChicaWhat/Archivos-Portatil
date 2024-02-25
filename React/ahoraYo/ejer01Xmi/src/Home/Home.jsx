// Importamos las prop-types
import PropTypes from 'prop-types';

// Componente Home que va a recibir como prop el array de tareas
const Home = ({ tasks }) => {
    return (
        <main>
            <h2>Lista de todas las tareas</h2>

            <ul>
                {tasks.map((task) => {
                    return <li key={task.id}>{task.text}</li>;
                })}
            </ul>
        </main>
    );
};

// Validamos las props
Home.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default Home;