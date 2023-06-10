import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Importar módulos da rootas
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Importar componentes
import Home from './pages/Home.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route element={<App />} >
          <Route path='/' element={<Signin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
