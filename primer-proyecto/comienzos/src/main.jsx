import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './componentes/header/Header.jsx'
import ListaTareas from './ListaTareas.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <BrowserRouter >

      <Header/>

      <Routes >
        <Route path="/" element={<App />}/>
        <Route path="listaTareas" element={<ListaTareas />}/>
        
      </Routes>
    
      
      
    </BrowserRouter>

  </React.StrictMode>,
)
