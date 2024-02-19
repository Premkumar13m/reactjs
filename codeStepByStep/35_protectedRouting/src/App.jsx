import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import NavBar from './Components/NavBar'
import User from './User'
import './App.css'
import Filter from './Components/Filter'
import Other from './Components/Other'
import Company from './Components/Company'
import Contact from './Components/Contact'
import Channel from './Components/Channel'
import Login from './Components/Login'
import Protected from './Components/Protected'
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      {/* <Route path='/home' element={<Home/>}/> */}
      <Route path='/about' element={<Protected Component={About}/>}/>
      <Route path='/home' element={<Protected Component={Home}/>}/>
      <Route path='/user/:name' element={<User/>}/>
      <Route path='/filter' element={<Protected Component={Filter}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact/' element={<Protected Component={Contact}/>}/> 
      <Route path='company' element={<Company/>}/>
      <Route path='other' element={<Other/>}/>
      <Route path='channel' element={<Channel/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
//let's create an login.jsx in components folder and create route in app.jsx and add it on the navBar.jsx.
//create protected.jsx in components folder.
//add this route  to all 
{/* <Route path='/contact/' element={<Protected Component={Contact}/>}/> 
 <Route path='/filter' element={<Protected Component={Filter}/>}/>
 <Route path='/about' element={<Protected Component={About}/>}/>
 <Route path='/home' element={<Protected Component={Home}/>}/> */}

 //this above line indicates that if you are not login then you are  not suppose to navigate to the another.if you wish to naviagte then you are automatically navigate to the login page through the Protected Routing.