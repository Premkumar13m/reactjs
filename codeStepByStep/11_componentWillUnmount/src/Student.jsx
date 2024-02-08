import React,{Component} from 'react'
class Student extends Component{
    componentWillUnmount(){
        alert(" componentWillUnmount() called")
    }
    render(){
        return(
            <div>
                <h1>Student component</h1>
            </div>
        )
    }
}
export default Student;

// note when we click on the button then the componentWillUnmount() will called.