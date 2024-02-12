import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
   <h1>high order component</h1>
   <HOCRed emp={Counter}/>
   <HOCGreen emp={Counter}/>
    </>
  )
}
function HOCRed(props){
  return <h2 style={{backgroundColor:'red', width:300}}>Red<props.emp/></h2>
}
function HOCGreen(props){
  return <h2 style={{backgroundColor:'green', width:300}}>Green<props.emp/></h2>
}
function Counter(){
  const [count, setCount] = useState(0)
  return <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>update count</button>
  </div>
}

export default App
//high order component is a component which takes component as a input and gives component as a output.