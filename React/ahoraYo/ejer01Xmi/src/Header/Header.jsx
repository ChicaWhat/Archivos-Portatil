// Componente Header
const Header = () => {
    // Importamos la variable de entorno correspondiente
    const { VITE_COMPANY_NAME } = import.meta.env.VITE_COMPANY_NAME;

    return (
        <header>
            <h1>{VITE_COMPANY_NAME}</h1>
        </header>
    );
};

export default Header;

