import {NavLink} from 'react-router-dom'
function NavBar(){
    return(
        <div>
            <ul className='navbar'>
                <li><NavLink style={({isActive})=>{return{color:isActive?'skyblue':''}}} to="/home" className='navlink'>Home</NavLink></li>    
                <li><NavLink style={({isActive})=>{return{color:isActive?'skyblue':''}}} to="/about" className='navlink' >About</NavLink></li>
                <li><NavLink style={({isActive})=>{return{color:isActive?'skyblue':''}}} to="/contact" className='navlink'>Contact</NavLink></li>
                <li><NavLink style={({isActive})=>{return{color:isActive?'skyblue':''}}} to="/filter" className='navlink'>Filter</NavLink></li>
                <li><NavLink style={({isActive})=>{return{color:isActive?'skyblue':''}}} to="/login" className='navlink'>Login</NavLink></li>
            </ul>
        </div>
    )
}
export default NavBar;
{/* add this line <li><NavLink style={({isActive})=>{return{color:isActive?'skyblue':''}}} to="/contact" className='navlink'>Contact</NavLink></li> */}