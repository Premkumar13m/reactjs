// using the Link instead of the anchor tag in the react and it should to be imported from the react-router-dom
import {Link} from 'react-router-dom'
function NavBar(){
    return(
        <div>
            <ul>
                <li><Link to="/home">home</Link></li>    
                <li><Link to="/about">about</Link></li>
                <li><Link to="/contact">contact us</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;
//here 'to' is the hooks in the react  in the Link tag.
// when we click on the Contact us then it will show the 404 page not found,
//this is because we don't have any path of the contact.that is why it is automatically called the pagenotfound page.