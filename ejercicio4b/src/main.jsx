import React from 'react'
import ReactDOM from 'react-dom/client'
import { Crear } from './App';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className="container d-lg-flex justify-content-center align-content-center flex-wrap">
    <Crear/>
  </div>
  </React.StrictMode>,
)
