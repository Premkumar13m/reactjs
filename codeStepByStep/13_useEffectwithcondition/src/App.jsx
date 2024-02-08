import {useEffect , useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
function App() {
  const [count, setCount] = useState(100)
  const [data, setData] = useState(10)
  return (
    <>
    <User count={count} data={data}/>
     < button onClick={()=>setData(data+1)}>update data</button>
     <button onClick={()=>setCount(count+1)}>update count</button>
    </>
  )
}

export default App
// using as a props 
