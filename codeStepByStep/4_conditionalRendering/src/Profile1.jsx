// uses of if and else and else if

import React, { useState } from "react";
//let us assume we have the three users i.e.,user 1, user 2 ,user 3. 
function Profile1(){
    const [islogged,setIsloged] = useState(3)

    return(
        <div>
       {
        islogged==1?
        <h1>user 1 called</h1>
        :islogged==2?
        <h1>user 2 called</h1>
        :<h1>user 3 called</h1>
       }
        </div>
    )
}
export default Profile1;
//if the useState arguments include the number 1 then the user 1 will called and so on.