import {useEffect , useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(100)
  const [data, setData] = useState(10)
  useEffect(()=>{
    console.log("useEffect called")
  },[data])

  return (
    <>
     <h1>Count {count}</h1>
     <h1>Data {data}</h1>
     < button onClick={()=>setData(data+1)}>update data</button>
     <button onClick={()=>setCount(count+1)}>update count</button>
    </>
  )
}

export default App

// but we want that useEffect() only called when we click on the update data then .   useEffect(()=>{
  //   console.log("useEffect called")
  // },[data])  
