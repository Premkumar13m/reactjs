import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
function Login() {
  
     const login=()=>{
       localStorage.setItem('login',true);      //once we click on the button then we login ,because it become true.
       navigate('/');
     }
     const navigate=useNavigate();
     useEffect(()=>{
          let login=localStorage.getItem('login');
          if(login){
          navigate('/')
          }
     })
    return (
        <div>
            <center>
            <h1>Login Page</h1>
            <p1> this is the Login page</p1><br/>
            <input type="text"></input><br />
            <input type="text" /><br />
            <button onClick={login}>Login</button>
            </center>
        </div>
    )
}
export default Login;

// once we click on the login button  then we can easily navigate to the other navigation bar . the login page will not appear.