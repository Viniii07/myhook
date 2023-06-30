import React, { useEffect, useState } from 'react'

export const ComponentWillUnmount = () => {
    const [isChild,setIsChild]=useState(true)
    const handleClick=()=>{
        setIsChild(!isChild)
    }
  return (
    <div>
        <button onClick={handleClick}>Click</button>
        {isChild && <Child/>}
    </div>
  )
}

const Child=()=>{
    useEffect(()=>{
        return()=>{
            alert("Component Will Unmount")
        }
    },[])
    return <div>I'm Child</div>
}
