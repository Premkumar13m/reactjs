import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("")
  const passwordGenerator = ()=> {}

  return (
    <>
   <h1 className='text-center text-4xl text-white font-mono font-bold'>Password Generator</h1>
    </>
  )
}

export default App
