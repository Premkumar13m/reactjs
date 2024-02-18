import { Link, Outlet} from "react-router-dom";

function Contact(){
    return(
        <div>
            <center>
            <h1>Contact us page</h1>
            <p>this is the Contact page information</p>
            <Link to="channel">Channel</Link>
            <Link to="other">Other</Link>
            <Link to="company">Company</Link>
            <Outlet/>
            </center>
        </div>
    )
}
export default Contact;
// Outlet is used mondatory without it we can not able to print the data.