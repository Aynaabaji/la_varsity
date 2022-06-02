import React from 'react'
import Cods from '../../components/contact/contact_dets/Cods'
import './contact.css'

const Contact = () => {
  return (
      <>
        <div className="contact"></div>
        <div className="container map_container">
            <div className="mapx">
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298.9935072253047!2d90.37653155042455!3d23.754981607691494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8aceea3e473%3A0x19f48f77de07bd6b!2sDaffodil%20Computers%20Ltd.%20Dhanmondi%20Br.!5e0!3m2!1sen!2sbd!4v1654171364235!5m2!1sen!2sbd"  allowfullscreen="" className='map' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="contact_details">
            <div className="container contact_details_container">
                <Cods/>
            </div>
        </div>
      </>
  )
}

export default Contact