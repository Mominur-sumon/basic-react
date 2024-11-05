import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './components/watchs/Watch'

function App() {

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('watches.json')
    .then(res =>res.json())
    .then(data => setWatches(data))
  },[])

  // const watches = [
  //   { id: 1, name: 'Rolex', price: 100 },
  //   { id: 2, name: 'Omega', price: 200 },
  //   { id: 3, name: 'Seiko', price: 300 },
  // ] ;


  

  return (
    <>

      <h1>Vite + React</h1>
      
      {
        watches.map(watch => (
          <Watch key={watch.id} watch={watch}> </Watch>
        ))
      }
     
    </>
  )
}
export default App
