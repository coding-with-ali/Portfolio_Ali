import React from 'react'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import Skills from "./Components/Skills";
import Service from './Components/Service'
import Project from './Components/Project'
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer"

export default function page() {
  return (
    <div >
      <HeroSection/>
      <About/>
      <Skills/>
      <Service/>
      <Project/>
      <ContactSection />
      <Footer/>
    </div>
  )
}
