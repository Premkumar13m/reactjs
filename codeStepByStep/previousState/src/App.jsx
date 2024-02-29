import { useState } from 'react'
import './App.css'
function App() {
  const[count,setCount]=useState(0);
  function updateCounter(){
//    for(let i=0;i<5;i++){
//     setCount((pre)=>pre+1)
//    }
            //or

     //    setCount(count+5)

            //or

      setCount((pre)=>pre+5)
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={updateCounter}>click me to update counter</button>
    </>
  )
}

export default App
//if we want to increase the count by 5 then we can do it by 3technique.
