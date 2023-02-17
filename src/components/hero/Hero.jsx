import React from 'react'
import './Hero.css'
import { useNavigate } from "react-router-dom";
import Header from '../header/Header'
const Hero = () => {
  const navigate=useNavigate()
  const handleSearch=()=>{
      navigate("/register")
  }
  return (
    <>
    <Header/>
   
    
    <div className="hero">
        <div className="hero-in">
            <div className="content">
                <h1>Find Your Future</h1>
                <span>At Impetus, we're dedicated to helping students grow personally and professionally. With mentorship, leadership development, and a focus on work ethics, we provide countless opportunities for students to excel. Join our community and find your future.</span>
        </div>
        <button className="btn" onClick={handleSearch} >Take the first step</button>
        </div>
     
    </div>
    </>
  )
}

export default Hero