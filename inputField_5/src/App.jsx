import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [print, setPrint] =useState(false)
  function getData(val){
      console.log(val.target.value)
      setData(val.target.value)
      setPrint(false)
  }

  return (
    <>
    {
      print?<h1>{data}</h1>:null
    }
    <input type="text" onChange={getData}/>
    <button onClick={()=>setPrint(true)}>print Data</button>
    </>
  )
}

export default App
