import { Component } from "react"
import './App.css'
class App extends Component {
  constructor(){
    super();  //here super is mondetory because it call the parent class of the App which is Component
    console.log("constructor called")
    this.state={          // technique of using state in class component   
      data:"prem"         
    }
  }
render(){
  console.log("render called")
  return (
    <>
    <h1>render called {this.state.data}</h1>
    </>
  )
}
}

export default App

//here first of all constructor will call and then render called.