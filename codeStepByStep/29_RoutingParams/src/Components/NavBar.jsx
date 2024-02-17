import {Link} from 'react-router-dom'
function NavBar(){
    return(
        <div>
            <ul>
                <li><Link to="/home">home</Link></li>    
                <li><Link to="/about">about</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;
