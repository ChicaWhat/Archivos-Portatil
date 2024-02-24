// Importamos los componentes
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

// Importamos los estilos
import './App.css'

// Esto se trata de un componente y SIEMPRE retorna JSX. Empiezan siempre por mayúscula.
// Un componente NO puede retornar etiquetas hermanas. Solamente lo puede hacer a través de
// un FRAGMENTO DE DOCUMENTO (<></>)
const App = () => {
  // Listado de tweets
  // Este array de tweets lo quiero llevar al componente Home para poder usarlo. Por eso creo la prop tweets con este elemento dentro.
  const tweets = [
    {
      id: 1,
      text: 'Hola mundo',
    },
    {
      id: 2,
      text: 'Sus muertos más sagraos',
    },
    {
      id: 3,
      text: 'Odio las putas props',
    },
  ];
// Si quiero pasarle por props algo a un atributo hijo, creamos un componente con el nombre deseado
// (se suele usar el mismo nombre del elemento que queremos pasarle. Ejem: tweets)
// 
  return (
    <>
      <Header />
      {/* Le paso un componente tweets al atributo hijo Home */}
      <Home tweets={tweets}/>
      <Footer />
    </>
  );
};

export default App;

// La combinación entre JS y HTML crea un 'nuevo lenguaje': JSX que consigue importar etiquetas de JS al HTML
