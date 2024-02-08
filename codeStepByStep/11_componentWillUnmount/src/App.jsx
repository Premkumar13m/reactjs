import React ,{ Component} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student'
class App extends Component {
  constructor()
  {
    super();
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <>
       {
          this.state.show?<Student/>:<h1>child component removed</h1>
       }
        <button onClick={()=>this.setState({ show: !this.state.show })}>Toggle Component</button>
      </>
    )
  }
}

export default App
