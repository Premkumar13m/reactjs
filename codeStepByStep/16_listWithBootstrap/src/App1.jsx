import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from 'react-bootstrap/Table';
function App() {
  const User = [
    { name: "prem", email: "abc@gmail.com", contact: '100' },
    { name: "sam", email: "klm@gmail.com", contact: '111' },
    { name: "peter", email: "efg@gmail.com", contact: '100' },
    { name: "hitler", email: "xyz@gmail.com", contact: '100' }
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
            User.map((item, i) =>
              item.contact === '100' ?
              <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                </tr> : null
            )
          }
        </tbody>
      </Table>
    </>
  )
}

export default App
//if we want to display the table only for those whose contact is 100 then,