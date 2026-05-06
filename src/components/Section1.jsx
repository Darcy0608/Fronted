//import React from 'react'
import './Section1.css'
import React, { useState } from 'react' /* Importamos el Hook useState */

function Section1() {

  const [nombre, setNombre] = useState("");

  return (
    <div>

      {/* Creamos la seccion de contenido principal  */}
        <h1>Contenido principal</h1>

        <div className='interaccion'>
          <label>Escribe tu nombre de usuario: </label>
          <input type="text" placeholder='Ej... Luis Mario' value={nombre} // Cada vez que el usuario escribe, actualizamos el estado
          onChange={(e) => setNombre(e.target.value)}/>

          <p>Usuario actual <strong>{nombre}</strong></p> {/* Mostramos el nombre actual en pantalla */}
        </div>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sint modi voluptatem possimus aliquam repellendus in suscipit officia distinctio nostrum, aliquid hic totam pariatur quis voluptate rerum! Laborum, omnis esse.</p>

        <h2>Mas informacion</h2> {/* Creamos un subtitulo */}
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eius itaque accusantium provident, perferendis consequuntur ducimus enim ipsa? Soluta suscipit, animi hic unde iste laboriosam corporis recusandae tempore omnis at.</p>
    </div>    
  )
}

export default Section1
