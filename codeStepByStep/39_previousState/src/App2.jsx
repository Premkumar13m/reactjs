import { useState } from 'react'
import './App.css'
function App() {
  const[count,setCount]=useState(0);
  function updateCounter(){
   let random=Math.floor(Math.random()*10);
     setCount((pre)=>{
        console.log(pre)
        if(pre<5){
            alert("number is less than 5")
        }
        return random
     })
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={updateCounter}>click me to update counter</button>
    </>
  )
}

export default App
//if we want to compare the previous value with the current random value then .