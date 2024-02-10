import './App.css'
import User from './User'
function App() {
  function parentAlert(data){
    console.log(data)
    alert(data.name)
  }
  return (
    <>
    <h1>sending data from the User to the App </h1>
    <User senddata={parentAlert}/>
    </>
  )
}

export default App
