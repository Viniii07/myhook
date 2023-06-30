import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { Hero } from './Hero'

export class  Exception extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     isError:false
  //   }
  // }
  //   static getDerivedStateFromError(){
  //       return{
  //         isError:true
  //       }
  //   }
  //   componentDidCatch(e){
  //       console.log(e)
  //   }
    render(){
  return (
    <div>
      {/* {this.state.isError?(
        <h1>Something went wrong</h1>
      ):(
      <> */}
      <ErrorBoundary>
      <Hero heroName={"Ritesh"}>Arpitha</Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName={"Allu Arjun"}/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName={"joker"}/>
      </ErrorBoundary>      
    </div>
  )
}
}
