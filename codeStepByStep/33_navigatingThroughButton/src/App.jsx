import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import NavBar from './Components/NavBar'
import User from './User'
import './App.css'
import Filter from './Components/Filter'
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/user/:name' element={<User/>}/>
      <Route path='/filter' element={<Filter/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
//let's change in the /Components/Home.jsx
//add the line in the App.jsx file     <Route path='/filter' element={<Filter/>}/>