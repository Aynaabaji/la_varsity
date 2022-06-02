import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './navbar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [openmenu, setOpenmenu] = useState(false);

  const hidden_menu = ()=>{
    setOpenmenu(!openmenu);
  }

  return (
    <section id="navmenu">
      <div className='container'>
        <nav>
          <div className="logo">
            <Link to="/"><img src={Logo} className="logopic" alt="logo" /></Link>
          </div>
          <div className="menu">
            <div className="menubar-lg">
              
              <div className="menu-list">
                <Link className='menu_list' to="/">Home</Link>
                <Link className='menu_list' to="/about">About</Link>
                <Link className='menu_list' to="/course">Course</Link>
                <Link className='menu_list' to="/blog">Blog</Link>
                <Link className='menu_list' to="/contact">Contact</Link>
              </div>

              <div className="menu-md">
                <FontAwesomeIcon onClick={hidden_menu} className='menu-icon' icon={faBars} />
                {
                openmenu && (
                  <div className="menu-list-md">
                    <Link className='menu_list' to="/">Home</Link>
                    <Link className='menu_list' to="/about">About</Link>
                    <Link className='menu_list' to="/course">Course</Link>
                    <Link className='menu_list' to="/blog">Blog</Link>
                    <Link className='menu_list' to="/contact">Contact</Link>
                  </div>
                )
              }
              </div>

              

            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar
