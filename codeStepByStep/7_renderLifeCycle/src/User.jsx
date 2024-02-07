import React from "react";
class User extends React.Component{
    constructor(){
        super();
        this.state={
            email:"prem@gmail.com"
        }
    }
    render(){
        console.warn("render method",this.state.email)
        return(
            <div>
             <h1>user Component</h1>
             <button onClick={()=>this.setState({email:"kumar@gmail.com"})}>update email</button>
            </div>
        )
    }
}
export default User;
// output - render method prem@gmail.com      i.e.,her first of all on the console it is printing 
// after clicking on the button it is printing  render method kumar@gmail.com  

// note:- render method is reloading again again when the props and state is updated.