import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Growth from './components/Growth'
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs'
import OurPricing from './components/OurPricing'

function App() {

  return (
    <>
      <div className='hero h-screen max-h-[628px] bg-no-repeat bg-cover mx-auto relative '>
        <NavBar />
        <Hero />
      </div>
      <Growth />
      <WhyChooseUs />
      <OurPricing />
      <Footer />
    </>
  );
}

export default App
