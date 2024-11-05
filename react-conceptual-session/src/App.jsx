import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products/Products'

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("State Changed");
  }, [state]);


  let storageVar = 0;
  // console.log(state);

  const handleState = () => {
    setState(state + 1);
  }

  const handleVariable = () => {
    storageVar = storageVar + 1;

  }

  const handleHeroAlam = (message) => {
    console.log("message : ", message);
  }


  const information = {
    message: "Secret Message",
    phone: "1234567890",
  };

  return (
    <>
      <Products info={information}></Products>
      <h1>Vite + React</h1>

      <div>
        <h1>This is State Count {state}</h1>
        <h1>This is variable count {storageVar}</h1>
      </div>

      <button className='hero' onClick={handleState}>Change State Count </button>
      <button onClick={handleVariable}>Change Variable Count </button>

      <button onClick={() => handleHeroAlam("okay hero Alam")}>Handle Hero Alom</button>

    </>
  )
}

export default App
