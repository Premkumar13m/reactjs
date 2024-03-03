import React,{useEffect,useRef} from "react";
function User(props){
    const lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.count
    })
    const previousProps=lastVal.current
    return(
        <>
        <h1>current value {props.count}</h1>
        <h2>previous value {previousProps}</h2>
        </>
    )
}
export default User;
//updating the value of the current value of the count in the previous props.
//to know about useref visits-  https://www.w3schools.com/react/react_useref.asp
