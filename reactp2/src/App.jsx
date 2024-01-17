/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-500 rounded-xl p-4 mb-4'>Tailwind css</h1>
     <Card username="Prem" btnText="click me"/>
     <Card username="Kumar" btnText="visit me"/>
    </>
  )
}

export default App
