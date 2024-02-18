 import {Link,useNavigate} from 'react-router-dom'
 function Home() {
     const navigate=useNavigate();
     const navToPage=(url)=>{         // functional navigation
        navigate(url)
    }
    return (
         <div>
             <center>
             <h1> this is the Home Page</h1>
             <p>Hello , this is home page</p><br></br>
             <p>we are learning react router here</p>
             <Link to="/about">go to about page</Link><br></br>
             <button onClick={()=>navToPage('/about')}>got to about page</button><br></br>
             <button onClick={()=>navToPage('/filter')}>go to filter page</button>
             </center>
         </div>
     )
 }
 export default Home;