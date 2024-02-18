import { Link } from "react-router-dom";

function About(){
    return(
        <div>
            <center>
            <h1 style={{fontSize:'xx-large'}}>About Page</h1>
            <h3>hello is the About Page</h3><br></br>
            <h3>we are learning react router here</h3>
            <Link to='/'>go to home page</Link>
            <h1><li><Link to="/user/anil">Anil</Link></li></h1>
            <h1><li><Link to="/user/peter">Peter</Link></li></h1>
            </center>
        </div>
    )
}
export default About;