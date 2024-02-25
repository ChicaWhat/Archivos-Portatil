// Importamos los componentes
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <Header>
        <h1>{import.meta.env.VITE_WEB_TITLE}</h1>
      </Header>
      <Home />
      <Footer />
    </>
  );
};

export default App;

// El children es un prop especial que permite acceder a la info que se coloque entre la etiqueta de apertura y cierre.
// En este caso children va a ser una prop de tipo string, porque es lo que contiene la etiqueta <Header>
// De normal children siempre va a representar etiquetas HTML (nodos)
