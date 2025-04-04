import Contacts from '@components/Contacts'
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
    </div>
  )
}

export default Main