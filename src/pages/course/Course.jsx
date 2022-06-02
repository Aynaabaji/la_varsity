import React from 'react'
import Facilities from '../../components/home/facilities/Facilities'
import Offer from '../../components/home/offer/Offer'
import './course.css'

const Course = () => {
  return (
      <>
        <div className="course">
          <h2>Our Courses</h2>
        </div>
        <div className="container">
            <Offer/>
            <Facilities/>
        </div>
      </>
  )
}

export default Course