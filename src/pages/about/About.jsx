import React from 'react'
import './about.css'
import Banner from '../../components/about/banner/Banner'
import Bio from '../../components/about/bio/Bio'

const About = () => {
  return (
    <>
      <Banner/>
      <Bio/>
      <div className="container sqoop_container">
        <section id='aboutus'>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore nostrum quos sequi vel, quibusdam ullam accusantium, ratione, fugiat incidunt eos nesciunt ducimus sit aut dicta nulla cum nemo id reiciendis.
          </p>
        </section>
      </div>
    </>
  )
}

export default About