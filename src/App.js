import React, { useState } from 'react'
import "./App.css"
import Validation from './Validation';

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
    parseInt(data.Phone)
  }
  const [valida, setValida] = useState({});

  const onclick = () => {
    setValida(Validation(data))

    // setSudent(
    //   [...sudent, { ...data }]
    // )
    // setData({Uname:"" , Phone:"" , Email:"" , Cors:"" , Age:""  })
  }

  return (
    <div className='App'>
      <h1>Sudent Data List</h1>
      <div className='row'>
        <input value={data.Uname} type='text' placeholder='Sudent Name' name='Uname' onInput={oninput} />
        {valida.Uname && <label style={{color:"red"}}>{valida.Uname}</label>}
        <input value={data.Phone} type='text' placeholder='Phone' name='Phone' onInput={oninput} />
        {valida.Phone && <label style={{color:"red"}}>{valida.Phone}</label>}
        {valida.Phone && <label style={{color:"red"}}>{valida.Phone}</label>}
        <input value={data.Email} type='text' placeholder='Email' name='Email' onInput={oninput} />
        <input value={data.Age} type='text' placeholder='Age' name='Age' onInput={oninput} />
        <input value={data.Cors} type='text' placeholder='Cors' name='Cors' onInput={oninput} />
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