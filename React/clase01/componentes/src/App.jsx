// Importamos los componentes.
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

// Importamos el array de tweets
import tweets from './data/tweets.json';

// Importamos los estilos.
import './App.css';

// Componente App.
const App = () => {

    return (
        <>
            <Header />
            <Home tweets={tweets} />
            <Footer />
        </>
    );
};

export default App;
