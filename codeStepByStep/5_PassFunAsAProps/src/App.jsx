import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Members from './Members'
function App() {

 function getData(){
  alert("hi from alert")
 }
  return (
    <>
       <h1>Pass function as a Props</h1>
       <User data={getData} />
       <Members data={getData}/>
    </>
  )
}

export default App
