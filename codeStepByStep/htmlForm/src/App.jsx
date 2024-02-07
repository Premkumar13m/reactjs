import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setname] = useState("")
  const [interest, setInterest] = useState("")
  const [tnc, setTnc] = useState(false)

  function getFormData(e){
    console.log(name,interest,tnc)
    e.preventDefault();
  }
  return (
    <>
      <h1>React form handler</h1>
      <form onSubmit={getFormData}>
        <input type='text' placeholder="select name" onChange={(e)=>setname(e.target.value)} value={name}/><br/><br/>
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Option</option>
          <option>Marvel</option>
          <option>Dc</option>
        </select><br/><br/>
        <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/><span>Accept term and condition</span><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
