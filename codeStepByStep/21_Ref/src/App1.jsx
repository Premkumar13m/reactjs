import './App.css'
import React,{createRef, Component} from 'react'   // importing the ref just  like as createRef
class App extends Component {
  constructor(){
    super()
    this.inputRef=createRef();  //here we are creating a ref whose name is taken as inputRef it could be anything.
  }
  componentDidMount(){
    console.log(this.inputRef.current.value=1000)  //with the help of this line automatically the input tag will have assign value 1000 to the console and window input box.
  }
  
  render(){
    return (
      <>
     <h1> Ref in React</h1>
     <input type='text' ref={this.inputRef}/>
      </>
    )
  }
}

export default App
// Ref is used in the class Component and it is basically used to manipulate the DOM.