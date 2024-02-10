import { useState } from 'react'
import './App.css'
import { Component } from 'react'
class App extends Component {
  constructor(){
    super();
    this.state={
    count:1
    }
  }
  render(){
    console.log("re rendering")
    return (
      <>
  <h1>normal component in react {this.state.count}</h1>
  <button onClick={()=>this.setState({count:1})}>Counter</button>
      </>
    )
  }
 
}

export default App
// note here the value of count is 1 when we click on the button multiple times then also it is printing the count 1.
// but how many times we click on the button it will re render the all the times which increase the time complexity of the code therefore we should used the pure component to overcome from this issues.