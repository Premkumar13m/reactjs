import './style.css'
import './App.css'
import style from './custom.module.css'
import React from 'react'
function App() {
  return (
    <>
     <h1 className='primary'>external css</h1>
     <h1 style={{color:'red',backgroundColor:'black'}}>inline css</h1>
      <h1 className={style.success}>modular css</h1>
    </>
  )
}

export default App
