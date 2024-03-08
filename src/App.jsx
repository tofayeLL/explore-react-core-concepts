import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor';
import Musicians from './Musisians';
import Bookstore from './Bookstore'






function App() {
  const actors = ['sakib', 'raj', 'manna', 'joshim', 'alongir', 'bapparaj'];
  const books = [
    {id: 1, name:'Physics', price: 100},
    {id: 2, name:'HigherMath', price: 200},
    {id: 3, name:'Chemistry', price: 120},
    {id: 4, name:'Biology', price: 150}
  ]
  const singers = [
    {id:1, name: 'pritom', age: 30},
    {id:2, name: 'mahfuz', age: 47},
    {id:3, name: 'sabina', age: 42},
    {id:4, name: 'runa', age: 45}
  ]

  return (
    <>
      <h1>Vite + React</h1>

      <Bookstore books={books}></Bookstore>



      {
        singers.map(singer => <Musicians singer={singer}></Musicians>)
      }

      
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo
        task="learn react" isDone={true}>
      </Todo>
      <Todo
        task="Explore props in jsx" isDone={true}>
      </Todo>
      <Todo
        task="Explore more in jsx" isDone={true}>
      </Todo>
      <Todo
        task="Explore core concepts of react" isDone={false}>
      </Todo> */}

      {/* <Device name="Laptop" price="2000"></Device>
      <Device name="mobile" price="1200"></Device>
      <Device name="watch" price="150"></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade="7th" score="99"></Student>
      <Student grade={12} score={88}></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer> */}

    </>
  )
}



function Device(props) {
  // console.log(props);
  return (
    <h3>Device name: {props.name} and price is: {props.price}</h3>
  )
}

function Person() {
  const age = 25;
  const money = 10;
  const person = { name: 'sakib', age: 32 }
  return <h3>I am a {person.name} and my age is: {age + money}</h3>
}

const { grade, score } = { grade: '7th', score: '99' }

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score)
  return (
    <div className='student'>
      <h3>I am a student</h3>
      <p>Grade: {grade}</p>
      <p>score: {score}</p>
    </div>
  )
}



function Developer() {
  const developerStyle = {
    border: '3px solid green',
    padding: '10px',
    borderRadius: '10px',
    marginTop: '5px'
  }
  return (
    <div style={{
      border: '3px solid green',
      padding: '10px',
      borderRadius: '10px',
      marginTop: '5px'
    }}>
      <h3>Developer</h3>
      <p>coding:</p>
      <p>sleeping:</p>
    </div>
  )
}

export default App
