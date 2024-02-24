// Importamos el array de tareas que está dentro de un fichero JSON.
import tasks from './todos.json';

// Importamos los componentes.
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

// Creamos el componente App.
const App = () => {
    return (
        <>
            <Header />
            {/* Pasamos como prop el array de tareas. */}
            <Home tasks={tasks} />
            <Footer />
        </>
    );
};

export default App;
