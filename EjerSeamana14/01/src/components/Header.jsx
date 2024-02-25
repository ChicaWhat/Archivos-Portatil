// Inicializando el componente
const Header = () => {
    return (
        <header>
            <h1>{import.meta.env.VITE_COMPANY_NAME}</h1>
        </header>
    );
};

export default Header;