import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("useEffect 1 called")
  })
  useEffect(()=>{
    console.log("useEffect 2 Called")
  })

  return (
    <>
     <h1>useEffect in React {count}</h1>
     <button onClick={()=>setCount(count+1)}>Update Count</button>
    </>
  )
}

export default App
// we are using useEffect in functional component we can do like  the componentDidmount() in the class component
// it will aumatically called when we click on the button.
// we can multiple useEffect hooks
