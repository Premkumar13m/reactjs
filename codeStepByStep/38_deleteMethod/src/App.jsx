import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
  const [users,setUser]=useState([])
  useEffect(()=>{
     getList();
  },[])
  console.warn(users)
  function getList(){
    fetch("http://localhost:4000/todo").then((result)=>{
      result.json().then((resp)=>{
        setUser(resp)
      })
    })
  }
  function deletUser(){
  fetch(`http://localhost:4000/todo/${id}`,{
    method:'DELETE'
  }).then((result)=>{
    result.json().then((resp)=>{
      console.log(resp)
      getList();
    })
  })
  }
  return (
    <div className="App">
      <h1>Delete data with API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
          <td>Operation</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.userId}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td><button onClick={()=>deletUser(item.id)}>Delete</button></td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;
//when we click on the delete button then the that particular id row will be deleted automatically.