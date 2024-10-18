import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products/Products'

function App() {

  const information = {
    message: "Secret Message",
    phone: "1234567890",
  };

  return (
    <>
      <Products info={information}></Products>
      <h1>Vite + React</h1>
      
    </>
  )
}

export default App
