import { useState } from "react"

function App() {
const [color,setColor] = useState("olive")
  return (
<div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
    <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
      <button
      onClick={ ()=> setColor("red")}
      className="outline-none bg-red-500 text-white rounded-full px-4 py-1 shadow-lg">red</button>
      <button 
      onClick={ ()=> setColor("green")}
      className="outline-none bg-green-500 text-white rounded-full px-4 py-1 shadow-lg">Green</button>
      <button 
      onClick={ ()=> setColor("blue")}
      className="outline-none bg-blue-500 text-white rounded-full px-4 py-1 shadow-lg">Blue</button>
    </div>
  </div>
</div>
  )
}

export default App
