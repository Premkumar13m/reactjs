import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
function App() {
  return (
    <>
    {/* <h1>hello from the routing2 </h1> */}
    {/* <NavBar/>  we can't write anything above the BrowserRouter everything should to be inside the BrowserRouter tag only. */}
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
