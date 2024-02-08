import './App.css'
import React, { Component } from 'react'
class App extends Component {
  constructor() {
    super();
    console.log("constructor called")
    this.state = {
      count: 0
    }
  }
  componentDidUpdate(preProps, preState, snapshot) {
    // console.log("componnetDidUpdate ",preState.count , this.state.count)
    //preState gives the previously count value
    //out:-componnetDidUpdate  0 1
    console.log("componentDidUpdate ",snapshot)  //out:-componentDidUpdate undefined
    if(this.state.count<10){
      console.log(this.state.count)
    }
  }
  render() {
    //never used any conditional statement inside the render method i.e., here
    return (
      <>
        <h1>hi there {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>update data</button>
      </>
    )
  }
}
export default App

