import './App.css'
import React, { Component } from 'react'
class App extends Component {
  constructor(){
    super();
    console.log("constructor called")
    this.state={
      name:"prem"
    }
  }
  componentDidUpdate(){
    console.log("componnetDidUpdate")
  }
render(){
  console.log("render method")
  return (
    <>
  <h1>hi there {this.state.name}</h1>
  <button onClick={()=>this.setState({name:"kumar"})}>update data</button>
    </>
  )
}

}

export default App
//here firstly constructor will called and then render  method will called 
//but onclicking the button the render as well as componentDidUpdate  called.
//note:-constructor will only called once and on clicking on the  button constructor will not called only render and the componentDidUpdate  called.
