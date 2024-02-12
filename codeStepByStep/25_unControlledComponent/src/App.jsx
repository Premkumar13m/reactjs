import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let inputRef=useRef(null)
  let inputRef2=useRef(null)
  function submitForm(e) {    
    e.preventDefault()           // this line stop the reloading of the page.
    console.log("input field 1 value ",inputRef.current.value)
    console.log("input field 2 value ",inputRef2.current.value)
    let input3=document.getElementById('input3').value
    console.log("input field 2 value ",input3)
  }
  return (
    <>
      <h1>Uncontrolled componnet</h1>
      <form onSubmit={submitForm}>
        <input type='text' ref={inputRef}/><br /><br></br>
        <input type='text' ref={inputRef2} /><br/><br></br>
        <input type='text' id='input3'/><br></br><br></br>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
//we can also handle the input field with the help of the javascript like document.getElementById also .
// we can use the controlled as well as uncontrolled component in class and functional component as well.