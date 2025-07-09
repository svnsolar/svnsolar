import React from 'react'
import Hero from './Hero'
import About from './About'
import FAQ from './FAQ'
import CTA from './CTA'
import WhyChooseUs from './WhyChooseUs'
import Services from './Services'
import Products from './Products'

export default function Homepage() {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Products/>
      <WhyChooseUs/>
      <FAQ/>
      <CTA/>
    </div>
  )
}
