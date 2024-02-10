// import { Component } from "react";
import { PureComponent } from "react";
class Child extends PureComponent{
    render(){
        console.log("user component re rendering");
        return(
            <>
            <h1>user component {this.props.counter}</h1>
            </>
        )
    }
}
export default Child;
//here also how many times we are clicking on the button that many times it will re rendering the child component.
// to avoid this issues we should make the child component as the pure component.