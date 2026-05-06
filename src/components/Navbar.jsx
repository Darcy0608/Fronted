//import React from 'react'
import { Link } from 'react-router-dom'; // Importamos Link para navegación interna
import './Navbar.css'

const Navbar = () => {
  return (
      <nav className='navbar'>
        <ul> {/* Creamos un menu de navegacion */}
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
              
            <Link to="/servicios">Servicios</Link> {/* Usamos /servicios para que coincida con la ruta que creamos en App.jsx */}
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar;
