
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from 'react-bootstrap/Table';
function App() {
  const Student = [
    { name: "prem", email: "abc@gmail.com", contact: 9190090 },
    { name: "sam", email: "klm@gmail.com", contact: 999909090 },
    { name: "peter", email: "efg@gmail.com", contact: 2090090 },
    { name: "hitler", email: "xyz@gmail.com", contact: 88970909 },
  ]
  return (
    <>
      <h1>list Table with bootstrap</h1>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
          {
            Student.map((item,i) =>              //here passing i  and key={i} is good practice,because if we doesnot pass then also it is true.
                              <tr key={i}>       
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.contact}</td>                            
                            </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}

export default App
