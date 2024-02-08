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
  <h1>hi there</h1>
    </>
  )
}

}

export default App
//here firstly constructor will called and then render  method will call but componentDidUpdate not called
