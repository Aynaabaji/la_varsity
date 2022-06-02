import React from 'react'
import './campus.css'
import Lon from '../../../assets/london.png'
import New from '../../../assets/newyork.png'
import Wash from '../../../assets/washington.png'


const camp = [
    {
        chobi:Lon,
        heads:"London"
    },
    {
        chobi:New,
        heads:"New York"
    },
    {
        chobi:Wash,
        heads:"Washington"
    }

]

const Campus = () => {
  return (
    <div>
        <div className="campus_heading">
            <h1>Our Global Campus</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>
        <div className="campus_content">
            {
                camp.map(({id,chobi,heads})=>{
                    return(
                        <div key={id} className="cam_cont">
                            <img src={chobi} alt="chobi" />
                            <div className="camp_overlay">
                                <h3>{heads}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Campus