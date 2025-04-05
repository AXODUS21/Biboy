import Contacts from '@components/Contacts'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import Services from '@components/Services'
import Strategy from '@components/Strategy'
import Testimonials from '@components/Testimonials'
import React from 'react'

const Main = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <Strategy />
      <Testimonials/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default Main