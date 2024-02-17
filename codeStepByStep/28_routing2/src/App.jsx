import './App.css'
import { BrowserRouter,Route, Routes , Navigate } from 'react-router-dom'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Home from './Components/Home'
import PageNotFound from './Components/PageNotFound'
function App() {
  return (
    <>
    {/* <h1>hello from the routing2 </h1> */}
    {/* <NavBar/>  we can't write anything above the BrowserRouter everything should to be inside the BrowserRouter tag only. */}
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/*' element={<Navigate to='/'/>}/>    with the help of this we line we can naviagte to the home page when we click on the any other routing accept the mention above router*/}
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
// here path='/*' means apart from the home and about whatever we pass in the route then automatically it will route to the pagenotfound page.