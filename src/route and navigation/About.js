import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const About = () => {
    const navigator=useNavigate();
  return (
    <div>
      <h1>this is about us</h1>
      <button onClick={()=>{navigator("/")}}>go to home</button>
    </div>
  )
}

export default About
