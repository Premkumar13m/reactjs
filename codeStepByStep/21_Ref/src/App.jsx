import './App.css'
import React,{createRef, Component} from 'react'  
class App extends Component {
  constructor(){
    super()
    this.inputRef=createRef();  
  }
  getVal(){
    console.log(this.inputRef.current.value)
    this.inputRef.current.style.color="red"     // this line will change the color of the text typed in the input box when we click on the button.
    this.inputRef.current.style.backgroundColor="black"   // it will change the background of the input box while clicking on the button.
  }
  render(){
    return (
      <>
     <h1> Ref in React</h1>
     <input type='text' ref={this.inputRef}/>
     <button onClick={()=>this.getVal()}>getRef</button>
      </>
    )
  }
}

export default App
