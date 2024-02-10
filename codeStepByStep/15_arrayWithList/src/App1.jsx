import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const Student = ["prem", "kumar", "sam", "peter"]
  //map looping

  //   Student.map((items)=>{
  // console.log("my names is ",items)
  //   })
  //for looping

  //   for(let i=0;i<Student.length;i++){
  //     console.log("my name is ",Student[i])
  //   }
  return (
    <>
      <h1>handle Array with List</h1>
      {
        Student.map((item) => <h1>my name is {item}</h1>)
      } 


      {/* {
        for(let i=0;i<Student.length;i++){
           console.log("my name is ",Student[i])         this is the error we can't used for loop in the return method.
             }
      } */}
    </>
  )
}

export default App
// we can only used for loop outside the return method if we used it  in the return method then it will be an error
//there it is mondatory to used the  map insead of the for loop in react js.
// always used curly braces when we used the map in return method because this is jsx.