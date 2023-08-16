import React from 'react'
import App from './App'
 
function Peramiter(props) {
  let {head} =props
  return (
    <>
    <h1>hello</h1>
      <h1>{head} mt</h1>
    </>
   
  )
}

export default Peramiter

// import React, { useState } from 'react'
// import "./App.css"

// function App() {
//   const [data, setData] = useState({
//     Uname: "",
//     Email: "",
//   });
//   const [user_data, setUser_Data] = useState([])
//   const oninput = (e) => {
//     setData({
//       ...data, [e.target.name]: e.target.value
//     })
//     console.log(e.target.name, "from", e.target.value);
//   }
//   const { Uname, Email } = data
//   const DataShow = () => {
//     setUser_Data(
//       [...user_data, { Uname, Email }]
//     )
//     console.log(user_data);
//     setData({ Uname: "", Email: "" })
//   }

//   return (
//     <div className='App'>
//       <h1> Hello Name: {user_data.Uname} Email: {user_data.Email} </h1>
//       <input name='Uname' type='text' onInput={oninput} />
//       <input name='Email' type='text' onInput={oninput} />
//       <button onClick={DataShow}>Click me</button>
//       <center>
//         <table >
//           <tbody>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//             </tr>
//             {
//               user_data.map((data, index) => (
//                 <tr key={index}>
//                   <td>{data.Uname}</td>
//                   <td>{data.Email}</td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </center>
//     </div>
//   )
// }

// export default App