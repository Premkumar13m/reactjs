import { useRef, useState } from 'react'
import './App.css'
import User from './User'
function App() {
  let inputRef=useRef(null)
  function updateInput(){
    inputRef.current.value=1000
    inputRef.current.style.color="red"
    inputRef.current.focus()
  }
  return (
    <>
    <h1>forwardRef</h1>
   <User ref={inputRef}/>
    <button onClick={updateInput}>update Ref</button>
    </>
  )
}

export default App
