// import React, { createRef, useRef } from 'react'

// export const GettingDataOnChange = () => {
//     const nameRef=createRef(null);
//     const pwdRef=useRef(null);
//     const emailRef=useRef(null);
//     const handleSubmit=()=>{
//         const name=nameRef.current.value;
//         const password=pwdRef.current.value;
//         const email=emailRef.current.value;
//         let data={
//             name,
//             password,
//             email
//         }
//         console.log(data)
//     }
//   return (
//     <div>
//         <p>
//             <b>Name:</b>
//             <input ref={nameRef}/>
//         </p>
//         <p>
//             <b>Email:</b>
//             <input type="email" ref={emailRef}/>
//         </p>
//         <p>
//             <b>Password:</b>
//             <input type="password" ref={pwdRef}/>
//         </p>
//         <p>
//             <input type="button" value="Submit" onClick={handleSubmit}/>
//         </p>
//     </div>
//   )
// }

import React, { createRef, useRef } from 'react'

const GettingDataOnChange = () => {
    let data={}
    const handleSubmit=(event)=>{
        console.log(data,"final data")
    }
    const handleChange=(eve)=>{
        let v=eve.target.value;
        let k=eve.target.id;
        data={
            ...data,
            [k]:v
        }
    }
  return (
    <div>
        <p>
            <b>Name:</b>
            <input onChange={handleChange} id="name"/>
        </p>
        <p>
            <b>Email:</b>
            <input type="email" onChange={handleChange} id="pwd"/>
        </p>
        <p>
            <b>Password:</b>
            <input type="password" onChange={handleChange} id="email"/>
        </p>
        <p>
            <input type="button" value="Submit" onClick={handleSubmit}/>
        </p>
    </div>
  )
}

export default GettingDataOnChange;