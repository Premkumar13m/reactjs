import React, { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate called ",this.state.count)  //shouldComponentUpdate called 0    and so on it will printed while clicking on the button
    // return true;  //to fix the issues uncomment this line.
  }
  render(){
    return (
      <>
         <h1>Should Component {this.state.count}</h1>  {/* // state is not going to change it remain zero.i.e.,Should Component 0     the count value will remain same here*/}
         <button onClick={()=>this.setState({count:this.state.count+1})}>update count</button>
      </>
    )
  }
}

export default App
// to fix this issues we have add one line in the shouldComponentUpdate() i.e., return true.
//the issues raised because by default shouldComponentUpdate() return false.