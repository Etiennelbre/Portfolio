import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profile-image.png" 

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=''/>
        <h1>I'm Etienne Labarbe, french student in development at Epitech.</h1>
        <a href="../../documents/CV_Etienne_LABARBE.pdf" download="CV_Etienne_LABARBE.pdf" className='hero-resume'>
            My resume
        </a>
    </div>
  )
}

export default Hero