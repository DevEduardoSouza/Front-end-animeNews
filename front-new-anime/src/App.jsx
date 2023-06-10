import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import FormularioAcesso from './component/formularioAcesso/FormularioAcesso';

function App() {

  return (
    <>
     <Outlet/>
    </>
  )
}

export default App
