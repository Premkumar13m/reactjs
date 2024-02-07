import React from "react";
function User(Props){
    return(
        <div>
             <h1>member component</h1>
                  {/* <button onClick={Props.data}>call data function</button> */}
                           {/* or */}
             <button onClick={()=>Props.data()}>call data function</button>
        </div>
    )
}
export default User;