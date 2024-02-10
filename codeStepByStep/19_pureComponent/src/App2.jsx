import { useState } from 'react'
import './App.css'
import { PureComponent } from 'react'

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1
    }
  }
  render() {
    console.log("re rendering")
    return (
      <>
        <h1>pure component in react {this.state.count}</h1>
        <button onClick={() => this.setState({ count: 1 })}>Counter</button>
      </>
    )
  }

}

export default App
//now it is okay because we are using the pure Commponent.
//if the count value doesnot change then the re rendering will not take place again it will only rendering at once .and when the count value change then the re rendering occur as many times as the re rendring occur.
