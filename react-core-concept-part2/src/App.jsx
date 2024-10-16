import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
  
  function handleClick() {
    alert('Button Clicked')
  }

  const handleClick2 = () => {
    alert('Button Clicked 2')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      
      <h3>React Core Concept 2</h3>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>

      {/* third way */}
      <button onClick={() => alert('Button Clicked 3')}>Click Me 3</button>

      <button onClick={() => addToFive(3)}>forth Button</button>
    </>
  )

}

export default App
