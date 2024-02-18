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
      <Route path='/contact/' element={<Contact/>}/> 
      <Route path='company' element={<Company/>}/>
      <Route path='other' element={<Other/>}/>
      <Route path='channel' element={<Channel/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
//create 4 components in the Components folder i.e., Other,Company,Channel,Contact.and import it also in App.jsx
//let's some change in the contact.jsx
// add this line    <Route path='/contact/' element={<Contact/>}/>
      //            <Route path='company' element={<Company/>}/>
      //            <Route path='other' element={<Other/>}/>
      //            <Route path='channel' element={<Channel/>}/>

// this above technique is called nested routing.
