import CaseStudies from '@components/CaseStudies'
import Contacts from '@components/Contacts'
import FAQ from '@components/FAQ'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import Services from '@components/Services'
import Strategy from '@components/Strategy'
import Testimonials from '@components/Testimonials'
import React from 'react'

const Main = () => {
  //TODO add a case study section and an faq section
  return (
    <div>
      <Hero/>
      <Services/>
      <Strategy />
      <Testimonials/>
      <CaseStudies/>
      <FAQ/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default Main