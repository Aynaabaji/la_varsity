import React from 'react'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className="footer-links">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mdsharafat75"><FaFacebookF/></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mdsharafat75"><BsTwitter/></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mdsharafat75"><BsInstagram/></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mdsharafat75"><FaLinkedinIn/></a>
        </div>
      </div>
      <div className="footer-text">Made with <AiOutlineHeart/> by <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/md-sharafat-islam-8a7773231/">&copy;Aynaabaji.</a> </div>
    </footer>
  )
}

export default Footer
