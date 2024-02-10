import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
    const Student = [
        { name: "prem", email: "abc@gmail.com", contact: 9190090 },
        { name: "sam", email: "klm@gmail.com", contact: 999909090 },
        { name: "peter", email: "efg@gmail.com", contact: 2090090 },
        { name: "hitler", email: "xyz@gmail.com", contact: 88970909 },
    ]
    return (
        <>
            <h1>handle Array with List</h1>
            <table border="1">
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                </tr>
                {
                    Student.map((data) =>
                           <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.contact}</td>
                           </tr>
                                )
                }
            </table>
        </>
    )
}

export default App