import {NavLink} from 'react-router-dom'
function NavBar(){
    return(
        <div>
            <ul className='navbar'>
                <li><NavLink style={({isActive})=>{return{color:isActive?'skyblue':''}}} to="/home" className='navlink'>Home</NavLink></li>    
                <li><NavLink style={({isActive})=>{return{color:isActive?'skyblue':''}}} to="/about" className='navlink' >About</NavLink></li>
                <li><NavLink style={({isActive})=>{return{color:isActive?'skyblue':''}}} to="/*" className='navlink'>Contact</NavLink></li>
            </ul>
        </div>
    )
}
export default NavBar;
// to active the link we should style the navlink in such a way that
// style={({isActive})=>{return{color:isActive?'skyblue':''}}}