// Importamos los componentes
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';

// Importamos el array de tasks
import tasks from './tasks.json';

// Creamos el componente App
const App = () => {

  return (
    <>
    {/* Creo los elementos hijos del componente padre App.*/}
      <Header />
      <Home tasks={tasks} />
      <Footer />
    </>
  )
}

export default App;
