import { useState } from 'react'
import './App.css'
function App() {
  const[count,setCount]=useState(0);
  function updateCounter(){
   let random=Math.floor(Math.random()*10);
     setCount(random)
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={updateCounter}>click me to update counter</button>
    </>
  )
}

export default App
//on clicking  the button the value of the count will be increasing one by one.