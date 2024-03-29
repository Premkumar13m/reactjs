import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/todo").then((result)=>{
      result.json().then((resp)=>{
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.userId}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;
//displaying the data from the from the api in the form of the table.
// code to fetch the data from the api is given below.
// useEffect(()=>{
//   fetch("http://localhost:4000/todo").then((result)=>{
//     result.json().then((resp)=>{
//       setUser(resp)
//     })
//   })
// },[])
// console.warn(users)       //to display the data from the api
