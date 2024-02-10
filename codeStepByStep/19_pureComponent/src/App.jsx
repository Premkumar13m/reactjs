import './App.css'
import React,{ Component } from 'react'
import Child from './Child';
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    }
  }
  render() {
    return (
      <>
    <Child counter={this.state.count}/>
        <button onClick={() => this.setState({ count:1})}>Update Count</button>
      </>
    )
  }

}

export default App;
