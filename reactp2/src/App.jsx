/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-500 rounded-xl p-4 mb-4'>Tailwind css</h1>
     <Card username="Prem" btnText="click me" para="Spring is one of the four temperate seasons, succeeding winter and preceding summer."/>
     <Card username="Kumar" btnText="visit me" para="React. js, a frontend-focused JS library used mainly for building single-page and multi-page interfaces, is one of the most popular programming technologies worldwide, and the number of companies reaching out to it proves its solid position."/>
    </>
  )
}

export default App
