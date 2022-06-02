import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Offer from '../../components/home/offer/Offer'
import Campus from '../../components/home/campus/Campus'
import Facilities from '../../components/home/facilities/Facilities'
import Enroll from '../../components/home/enroll/Enroll'

const Home = () => {
  return (
    <>
      <section id="banner">
          <div className="container">
            <div className="ban_text">
              <h1>World's Biggest University</h1>
              <h5>Making Website is now one of the easiest thing in the world. You just need to learn HTML, CSS, Javascript and you are good to go!</h5>
              <div className="ban_button">
                <button className='btn btn-primary'><Link className='link_color' to="/about">Visit Us to know more!</Link></button>
              </div>
            </div>
          </div>
      </section>
      <div className="offerX">
        <div className="container offer__container">
          <Offer/>
        </div>
      </div>
      <div className="campusX">
        <div className="container campus_container">
          <Campus/>
        </div>
      </div>
      <div className="facilitiesX">
        <div className="container facilities_container">
          <Facilities/>
        </div>
      </div>
      <div className="enrollX">
        <div className="container">
          <Enroll/>
        </div>
      </div>
    </>
  )
}

export default Home