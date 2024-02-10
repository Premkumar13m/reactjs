import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from 'react-bootstrap/Table';

function App() {
  const User = [
    {
      name: "john", email: "john@gmail.com", address: [
        { Hn: "10", city: "utrakhand", country: "india" },
        { Hn: "11", city: "up", country: "india" },
        { Hn: "12", city: "jammu", country: "india" },
      ]
    },
    {
      name: "peter", email: "peter@gmail.com", address: [
        { Hn: "15", city: "patna", country: "india" },
        { Hn: "16", city: "lucknow", country: "india" },
        { Hn: "17", city: "ranchi", country: "india" },
      ]
    },
    {
      name: "sam", email: "sam@gmail.com", address: [
        { Hn: "101", city: "bhopal", country: "india" },
        { Hn: "112", city: "indore", country: "india" },
        { Hn: "121", city: "chennai", country: "india" },
      ]
    }
  ]
  return (
    <>
      <h1>Nested List With Nested Array</h1>
      <Table striped bordered hover variant='dark'>
        <tbody>
          <tr>
            <td>S.No</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>ADDRESS</td>
          </tr>
        </tbody>
        <tbody>
          {
            User.map((item, i) =>
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Table  bordered hover variant='dark'>
                    <tbody>
                      <tr>
                        <td>House NO.</td>
                        <td>City</td>
                        <td>Country</td>
                      </tr>
                      {
                        item.address.map((data,j)=>
                        <tr key={j}>
                          <td>{data.Hn}</td>
                          <td>{data.city}</td>
                          <td>{data.country}</td>
                        </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </td>
              </tr>
            )
          }
        </tbody>

      </Table>
    </>
  )
}

export default App
