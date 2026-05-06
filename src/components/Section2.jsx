//import React from 'react'
import "./Section2.css"
import React, { useState, useEffect } from 'react' /* Importamos el Hook useState */


const Section2 = () => {
  const [cargando, setCargando] = useState(true);

  useEffect(() =>{
    console.log("El componente Section2 se a cargado");

    const timer = setTimeout(() => {
      setCargando(false);
      console.log("Carga de datos simulada completa");
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);


  return (
    
    <div className='section2'>
      <h2>Segunda seccion</h2>
      {cargando ? (
        <p><strong>Cargando servicios...</strong></p>
      ) : (
        <div>
          <p>Datos recibidos correctamente.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate in illum sed maxime, a nostrum modi quo voluptas earum soluta porro laborum! Odit nemo dolore itaque. Nesciunt quasi deleniti officia.</p>
    </div>
      )}
      </div>
  )
}

export default Section2;
