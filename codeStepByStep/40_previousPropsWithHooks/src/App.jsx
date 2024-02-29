import { useState } from 'react'
import './App.css'
import User from './User'
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <User count={count}/>
    <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update Counter</button>
    </>
  )
}

export default App
//updating the count value using the props props and the hooks.
