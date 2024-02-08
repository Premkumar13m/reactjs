import { useEffect } from "react"

function User(props) {
    useEffect(() => {
        alert("count is " + props.count)
    },[props.count])
    return (
        <div>
            <h1>count props: {props.count}</h1>
            <h1>data props: {props.data}</h1>
        </div>
    )
}
export default User
//when we clock  on the button update count the only useEffect will excute. 