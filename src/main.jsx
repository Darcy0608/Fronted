import React from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import App from './App.jsx'
import './index.css'

import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode} from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Componente de la app para que las url funcionen */}
      <Routes>

        <Route path="/" element={<App />}> {/* App es la base fija, contiene el Navbar y el Footer */}  
          <Route index element={<Section1 />}/> {/* La Section1 será lo que se vea en el inicio, el contenido por defecto */}
          <Route path="servicios" element={<Section2 />}/> {/* La Section2 se verá cuando se entre a /servicios */}
          <Route path="contacto" element={<Section3/>}/> {/* La seccion 3 se vera cuando se entre a /contact */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
