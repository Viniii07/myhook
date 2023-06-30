import React, { forwardRef, useRef } from 'react'

export const ExampleForwardRef = () => {
    const nameRef=useRef(null)
    const handleName=()=>{
        nameRef.current.value="Vinita"
    }
  return (
    <div>
        <button onClick={handleName}>Update Name</button>
        <Child ref={nameRef} loc="Sangola"/>
    </div>
  )
}

const Child=forwardRef(({loc},ref)=>{
    return <div>
        <h1>I'am Child....{loc}</h1>
        <input ref={ref}/>
    </div>
})