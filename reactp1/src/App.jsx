import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  //let counter=15;
  let [counter,setCounter]=useState(15)
  const addValue=()=>{
    //let counter=15;
    console.log(`clicked :`,counter)
    //counter=counter+1
    setCounter(counter+1)
  }
  const removeValue=()=>{
    if(counter==0){
       setCounter(0);
    }else{
      setCounter(counter-1)
    }
  }
  return (
    <>
    <h1>hello from reactp1</h1>
    <h2>counter value :{counter}</h2>
    <button onClick={addValue}>Add value : {counter}</button><br/>
    <button onClick={removeValue}>Remove value : {counter}</button>
    </> 
  )
}

export default App
