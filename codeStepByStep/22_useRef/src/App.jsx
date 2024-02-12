import { useRef, useState } from 'react'
import './App.css'

function App() {
let inputRef=useRef(null)
function handleInput(){
  console.log("function call")
  inputRef.current.value="1000"   //it will display the 1000 in the input box
  inputRef.current.style.color="red"  // it will change the color of the text in the input box
  inputRef.current.focus();           // it will highlight the cursor in the input box
  // inputRef.current.style.display="none"       //it will hide the input box from the window while clicking on the button
}
  return (
    <>
    <h1>useRef in React</h1>
   <input type='text' ref={inputRef}></input>
   <button onClick={handleInput}>Handle input</button>
    </>
  )
}

export default App
//useRef is a HOOK used to manipulate the dom in the functional component.
//with the help of useRef we change the color , style ,focus.
