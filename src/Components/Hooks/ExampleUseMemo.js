import React, { useMemo, useState } from 'react'

const ExampleUseMemo = () => {
    const [count,setCount]=useState(0)
    const delay=useMemo(()=>{
        for (let i=0;i<=10000000000;i++){}
        return 10;
    },[])
  return (
    <div>
        <h1>{delay}</h1>
        <button onClick={()=>setCount(count+1)}>Inc Count...{count}</button>
    </div>
  )
}

export default ExampleUseMemo;