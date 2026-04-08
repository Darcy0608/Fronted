import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <h2>My App</h2>
        <ul> {/* Creamos un menu de navegacion */}
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Servicios</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    
  )
}

export default Navbar
