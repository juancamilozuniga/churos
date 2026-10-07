import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Pagina from './pagina.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pagina />
  </StrictMode>,
)