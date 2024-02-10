function User(props){
  const data={name:"prem",email:"abc@gmail.com"}
    return(
        <>
        <h1>User Name : </h1>
        <button onClick={()=>props.senddata(data)}>Click Me</button>
        </>
    )
}
export default User;