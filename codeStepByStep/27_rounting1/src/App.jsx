import { BrowserRouter,Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import About from './Component/About'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
// firstly install react Router :  npm install react-router-dom
//go through the link  : https://reactrouter.com/en/main/start/tutorial
// create a folder in the src namely as Component and create the two files Home.jsx and the About.jsx
//import these two folder in the App.jsx
//import { BrowserRouter,Route, Routes } from 'react-router-dom'
//wrap the Routes in the BrowserRouter and Route in the Routes