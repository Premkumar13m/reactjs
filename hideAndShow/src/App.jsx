import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Status, setStatus] = useState(true)

  return (
    <>
    {
      Status?<h1>show the data</h1>:null
    }
     {/* <button onClick={()=>setStatus(true)}>Show</button>
     <button onClick={()=>setStatus(false)}>Hide</button> */}
              {/* or */}
      <button onClick={()=>setStatus(!Status)}>Toggle</button>
    </>
  )
}

export default App
