import React, { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
                              //for the conditional statement
//if we want to change the state with the help  of the condition statement then 
class App extends Component {
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate called ",this.state.count)  // this line will be run simultaneously when we click on the button.
    if(this.state.count>5&&this.state.count<10)
    return true
  }
  render(){
    return (
      <>
   <h1>Should Component {this.state.count}</h1>        {/* this line will exicuted when the count value will be >5 and <10    */}
         <button onClick={()=>this.setState({count:this.state.count+1})}>update count</button>
      </>
    )
  }
}

export default App