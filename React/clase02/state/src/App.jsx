// Importamos los componentes.
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

// Inicializamos el componente.
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
