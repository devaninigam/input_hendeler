import React, { useState } from 'react'
import "./App.css"

function App() {
  const [data, setData] = useState({
    Uname: "",
    Phone: "",
    Email: "",
    Age: "",
    Cors: "",
  });
  const [sudent, setSudent] = useState([]);
  const oninput = (e) => {
    setData(
      { ...data, [e.target.name]: e.target.value }
    )
    // console.log(e.target.name, ":", e.target.value);
  }
  const { Uname, Phone, Email, Cors, Age } = data
  const onclick = () => {
    setSudent(
      [...sudent, { Uname, Phone, Email, Cors, Age }]
    )
    console.log(sudent);
    setData({ Uname: "", Phone: "", Email: "", Cors: "", Age: "" })
  }

  return (
    <div className='App'>
      <h1>Sudent Data List</h1>
      <div className='row'>
        <input type='text' placeholder='Sudent Name' name='Uname' onInput={oninput} />
        <input type='text' placeholder='Phone' name='Phone' onInput={oninput} />
        <input type='text' placeholder='Email' name='Email' onInput={oninput} />
        <input type='text' placeholder='Age' name='Age' onInput={oninput} />
        <input type='text' placeholder='Cors' name='Cors' onInput={oninput} />
        <button onClick={onclick}>Click me</button>
      </div>
      <center>
        <table border={1}>
          <tbody>
            <tr>
              <th colSpan={6}>Sudent Data List</th>
            </tr>
            <tr>
              <th>No.</th>
              <th>Sudent Name</th>
              <th>Phone No</th>
              <th>Email Id</th>
              <th>Age</th>
              <th>Cors</th>
            </tr>
            {
              sudent.map((S_data, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{S_data.Uname}</td>
                  <td>{S_data.Phone}</td>
                  <td>{S_data.Email}</td>
                  <td>{S_data.Age}</td>
                  <td>{S_data.Cors}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default App