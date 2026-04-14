//import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
      <nav className='navbar'>
        <ul> {/* Creamos un menu de navegacion */}
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Servicios</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
  )
}

export default Navbar
