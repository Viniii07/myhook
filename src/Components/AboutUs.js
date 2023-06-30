import React from 'react'
import { ComponentWillUnmount } from './ComponentWillUnmount';
import ErrorBoundary from './ExceptionHandling/ErrorBoundary';
import { Hero } from './ExceptionHandling/Hero';


class AboutUs extends React.Component  {
  render(){
    return (
      <div>
        <ErrorBoundary>
         <Hero heroName={"Ritesh"}/>
         </ErrorBoundary>
         <ErrorBoundary>
         <Hero heroName={"joker"}/>
        </ErrorBoundary>
        <ComponentWillUnmount/>   
      </div>
    )
  }
  
}

export default AboutUs;