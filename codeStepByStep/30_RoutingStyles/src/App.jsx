import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import NavBar from './Components/NavBar'
import User from './User'
import './App.css'
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/user/:name' element={<User/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App