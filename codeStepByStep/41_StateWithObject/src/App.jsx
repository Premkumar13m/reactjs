import { useState } from 'react'
import './App.css'
function App() {
  const [data, setData] = useState({name:"prem",age:28})
  return (
    <>
    <h1>state with the object</h1>
    <input type='text' placeholder='enter your name' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/><br/><br/>
    <input type='number' placeholder='type your age' value={data.age} onChange={(e)=>setData({...data,age:e.target.value})}/>
     <h1>{data.name}</h1>
     <h1>{data.age}</h1>
    </>
  )
}

export default App
//on changing any value in the data either in your  name or in age it will update the states.
//onChange={(e)=>setData({age:data.age,name:e.target.value})}
           //or
// onChange={(e)=>setData({..data,name:e.target.value})}
      //note :-here age:data.age   or ..data  are same with the help of this line we can keep the data on the monitor it will not dissappear if we will not write this line then while changing the name the age will not visible it will disappear from the screen.

//  onChange={(e)=>setData({name:data.name,age:e.target.value})}
                //or
// onChange={(e)=>setData({...data,age:e.target.value})}
