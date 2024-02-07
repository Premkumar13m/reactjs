import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React,{ Component } from 'react'

class App extends Component { 
  constructor(){
    super();
    console.log("constructor called")
    this.state={
      name:"prem"
  }
}
componentDidMount(){
  console.log("componentDidMount called")
}

 render(){
  console.log("render method called")
  return (
    <>
    <h1>componentDidMount {this.state.name}</h1>
    <button onClick={()=>this.setState({name:"kumar"})}>update data</button>
    </>
  );
 }
}

export default App;
//here first of all constructor called and then render method called and the last componentDidMount called
// this is because componentDidMount method will call only when the render method is called and also we can called render method again and again but we can call componentDidMount only once this is the reason we are using the componentDidMount in Api's. 

// while clicking on the button the componentDidMount method will run at once but render method will run at multiple times when we click on the button.