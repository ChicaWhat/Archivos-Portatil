// Importamos los componentes
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';

// Importamos el array de tareas que está dentro de un fichero JSON
import tasks from './tasks.json';

// Creamos el componente App
const App = () => {

  return (
    <>
    {/* Creo los elementos hijos del componente padre App.*/}
      <Header />
    { /* Pasamos como prop el array de tareas */}
      <Home tasks={tasks} />
      <Footer />
    </>
  )
}

export default App;
