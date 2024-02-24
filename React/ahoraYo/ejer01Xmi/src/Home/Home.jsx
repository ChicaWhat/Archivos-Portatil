// Importamos las prop-types
import PropTypes from 'prop-types';

// Componente Home que va a tener un array de tareas
const Home = ( {tasks} ) => {
    // Creamos un array de <li> para cada elemento del array de tasks
    const tasksLi = tasks.map((task) => {
        return <li key={task.id}></li>
    })
    return (
        <main>
            <h2>Lista de todas las tareas</h2>

            <ul>
                {tasksLi}
            </ul>
        </main>
    );
};

// Validamos las props
Home.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default Home;