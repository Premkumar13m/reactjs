import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [val, setVal] = useState(1000)

  return (
    <>
    <h1>controlled component</h1>
    <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/>
    <h3>val : {val}</h3>   
    </>
  )
}

export default App
// component ke andar input feild hote hai aur us input field ko hadle  karne ke liye controlledComponent use  karte hai.isme hum react ka states ko use krte hai.
// what ever we type in the input box that will display on the window.
