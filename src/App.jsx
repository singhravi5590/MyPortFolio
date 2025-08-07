import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='bg-[#050414]'>
      <div></div>
      <div className='relative pt-20'>
        <Navbar/>
        <About/>
        <Skills/>
        <Experience/>
        <Work/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App