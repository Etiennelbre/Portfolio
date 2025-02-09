import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div id='home' className='hero'>
        <Hero/>
      </div>
      <div id='project' className='project'>
        <Project/>
      </div>
      <div id='contact' className='contact'>
        <Contact/>
      </div>
    </div>
  )
}

export default App