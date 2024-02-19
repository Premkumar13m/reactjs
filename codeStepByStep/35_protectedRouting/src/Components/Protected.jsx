import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props){
    const {Component}=props
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(!login)
        navigate('/login');
    })
    return(
        <div>
            <Component/>     
        </div>
    )
}
export default Protected;
//logic to navigate to the login page.if you are not allready login then  you are going to navigate to the login page and if you are login successfully then you can easily navigate to the any navigation bar.login page will not appear for you.