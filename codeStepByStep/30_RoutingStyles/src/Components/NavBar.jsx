import {NavLink} from 'react-router-dom'
function NavBar(){
    return(
        <div>
            <ul className='navbar'>
                <li><NavLink to="/home" className='navlink'>Home</NavLink></li>    
                <li><NavLink to="/about" className='navlink' >About</NavLink></li>
                <li><NavLink to="/*" className='navlink'>Contact</NavLink></li>
            </ul>
        </div>
    )
}
export default NavBar;
