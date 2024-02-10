import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [item,setItem]=useState(0)
 const myCounter=useMemo(function multiCount(){
  console.log("multiCount")
  return count*5
 },[count])
  return (
    <>
     <h1>normal functonal component</h1>
     <h2>counter : {count}</h2>
     <h2>item : {item}</h2>
     <h1>{myCounter}</h1>
     <button onClick={()=>setCount(count+1)}>update count</button>
     <button onClick={()=>setItem(item+1)}>update item</button>
    </>
  )
}

export default App
// either i click to the update count or update item the function myCounter() is calling again and again.
// to fix this issues we should used useMemo