import { useParams } from "react-router-dom";
function User(){
    const params=useParams(); //this line is compulsory
    const {name}=params;
    console.log(name)
    return(
    <div>
        <h1>this is {name}'s Page</h1>
    </div>
    )
}
export default User;
//import the hooks useParams from the 'react-router-dom'