import React from 'react'

export const Hero = ({heroName,children}) => {
    if (heroName==="joker"){
        throw new Error("Joker is not a hero")
    }
        
  return (
    <div>I'am a Hero....{heroName}....{children}</div>
  )
}
