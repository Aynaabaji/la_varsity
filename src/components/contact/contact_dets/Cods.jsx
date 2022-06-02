import React from 'react'
import './cods.css'
import {FaHome} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'

const brem = [
    {
        ic:<FaHome/>,
        detHead:"Xyz Road, Abc Building",
        bloop:"Bangalore, Karnataka, IN"
    },
    {
        ic:<BsFillTelephoneFill/>,
        detHead:"+1 0123456789",
        bloop:"Monday to Saturday 10 am to 6 pm"
    },
    {
        ic:<FiMail/>,
        detHead:"info@easytutorialspro.com",
        bloop:"Email us your query"
    }
]

const Cods = () => {
  return (
      <div className="cods">
          <div className="c-left">
              {brem.map(({id,ic,detHead,bloop})=>{
                  return(
                      <div key={id} className="det_left">
                          <div className="dleft">
                              {ic}
                          </div>
                          <div className="dright">
                              <div className="dtop">
                                  <h3>{detHead}</h3>
                              </div>
                              <div className="dbot">
                                  <small>{bloop}</small>
                              </div>
                          </div>
                      </div>
                  )
              })}
          </div>
          <div className="c-right">
              <form action="#">
                  <input className='temp' type="text" placeholder='Enter your name' />
                  <input className='temp' type="text" placeholder='Enter email address' />
                  <input className='temp' type="text" placeholder='Enter your subject' />
                  <textarea name="mes" id="mes" placeholder='Message'></textarea>
                  <div>
                    <button className='btn-rev btn-primary-rev'>Send Message</button>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default Cods