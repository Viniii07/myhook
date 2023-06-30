import React, { useState } from 'react'
import ErrorBoundary from './ExceptionHandling/ErrorBoundary'
import { Hero } from './ExceptionHandling/Hero'

export const VirtualDom = () => {
    const [count, setCount]=useState(0)
  return (
    <div>
        {alert("renderd component")}
        <h1>5000 lines of code</h1>
        <button onClick={()=>setCount(count+1)}>Inc Count...{count}</button>
        <ErrorBoundary>
         <Hero heroName={"Ritesh"}/>
        </ErrorBoundary>
    </div>
  )
}
