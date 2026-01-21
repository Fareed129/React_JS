import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // define a variable
  // let counter= 10;

  // define a hook
  let [counter, setCounter]= useState(10) // counter and setCounter can be any two variable defined together

  const addValue= ()=>{
    // console.log("value incremented");
    // counter+=1
    // counter++;

    setCounter(counter+1)
    console.log(counter);
  }

  const subValue= ()=>{
    setCounter(counter-1)
    console.log(counter);
    
  }

  return (
    <>
      <h1>Hey everyone, we are here to understand hooks in react</h1>
      <h3>Counter: {counter} </h3>


      <button onClick={addValue}>Increment by 1</button>
      <button onClick={subValue}>Decrement by 1</button>
    </>
  )
}

export default App
