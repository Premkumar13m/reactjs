import { Link } from "react-router-dom";

function About(){
    return(
        <div>
            <h1>About Page</h1>
            <p>hello is the About Page</p><br></br>
            <p>we are learning react router here</p>
            <Link to='/'>go to home page</Link>
            <li><Link to="/user/anil">Anil</Link></li>
            <li><Link to="/user/peter">Peter</Link></li>
        </div>
    )
}
export default About;