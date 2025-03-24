import React from 'react'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <section className='hero'>
        <img src="/restaurant.jpg" alt="restaurant" />
        <div className='item'>
            <h3>DREAM MAKER</h3>
       <div>
        <h1>YOUR DREAM EVENT</h1>
        <p>We believe that it's all about the big dreams and the small details!</p>
        <Link to="contact" spy={true} smooth={true} duration={500} >BOOK NOW</Link>
        </div>
        </div>
    </section>
  )
}

export default HeroSection
