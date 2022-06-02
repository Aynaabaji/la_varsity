import React from 'react'
import './bio.css'
import About from '../../../assets/about.jpg'

const Bio = () => {
  return (
    <div className="bio">
      <div className="container bio_container">
        <div className="bio_content">
          <div className="bio_left">
            <h1>We are the world's largest university</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, excepturi at consequatur soluta sit et necessitatibus quaerat non porro magnam nam similique, magni eius accusamus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, itaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, similique.</p>
            <div>
              <button className='btn-rev btn-primary-rev'>EXPLORE NOW</button>
            </div>
          </div>
          <div className="bio_right">
            <img src={About} alt="about" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio