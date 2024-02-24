// Importamos los componentes
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// El 'document.getElementById' se encarga de renderizar (cargar) todo lo que haya, en este caso, en el componente App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
