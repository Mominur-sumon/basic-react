import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  ToDo  from './ToDo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const actors = ['Sakib khan', 'Salman khan', 'Amir khan', 'Shahrukh khan'];
  const singers = [
    {name: 'Atif Aslam', age: 40},
    {name: 'Arijit Singh', age: 35},
    {name: 'Sonu Nigam', age: 45},
    {name: 'Arman Malik', age: 30},
    {name: 'Neha Kakkar', age: 25}
  ]
  return (
    <>

      <h1>Vite + React</h1>

      <Actor name="Tom Cruise"></Actor>

      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      {/* <ToDo task="Learn JS" isDone={true}></ToDo>
      <ToDo task="Learn React" isDone={false}></ToDo>
      <ToDo task="Learn NodeJs" isDone={true}></ToDo> */}
      

      {/* <Device name ="Laptop" price = "50000"> </Device>
      <Device name ="Mobile" price="20000"> </Device>
      <Device name ="Tablet" price="30000"> </Device>
      <Person> </Person>

      <Student grade="7" score="99"> </Student>
      <Student grade="8" score="88" > </Student>
      <Student> </Student>

      <Developper> </Developper> */}

    </>
  )
}

function Device (props) {
  console.log(props);
  return <h2> Thus is a {props.name} {props.price}:</h2>
}

function Person() {
  const age = 20;
  const money = 10;
  const person = { name: 'sakib', age: 20 };
  return <h3> I am {person.name} with age : {age + money} </h3>
}

// function Student(props) {
//   console.log(props);
//   return (
//     <div className='student'>
//       <h3>This is a student of class {props.grade} score {props.score}</h3>
//     </div>)
// }

// We can also destruct the props in the function parameter
function Student({grade = 1, score = 0}) {
  return (
    <div className='student'>
      <h3>This is a student of class {grade} score {score}</h3>
    </div>)
}

function Developper() {

  const developperStyle = {
    margin: '10px',
    padding: '10px',
    border: '2px solid red',
    borderRadius: '10px'
  }
  return (
    <div style={developperStyle}>
      <h3> I am a developper</h3>
      <p>Codding</p>
    </div>

  )
}

export default App
