import React,{useState} from 'react'
function Profile(){
    const [loggedIn,setLoggedIn] = useState(false)
    return(
        <div>
            {/* if else statement can be used as the ternary operator*/}
            {loggedIn?<h1>if true then only it will excute</h1>:<h1>if false then it will excute</h1>}
        </div>
    )
}
export default Profile;
//when the useState is false then the false statement will excute.
// and when the useState is true then the true statement will excute of the ternary operator.