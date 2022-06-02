import React from 'react'
import './facilities.css'
import Library from '../../../assets/library.png'
import Bas from '../../../assets/basketball.png'
import Caf from '../../../assets/cafeteria.png'


const faci = [
    {
        picture:Library,
        header:"World Class Library",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sunt!"
    },
    {
        picture:Bas,
        header:"Largest Play Ground",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sunt!"
    },
    {
        picture:Caf,
        header:"Tasty and Healthy Food",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sunt!"
    }
]

const Facilities = () => {
  return (
    <div>
        <div className="facilities_header">
            <h2>Our Facilities</h2>
            <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente.
            </h5>
        </div>
        <div className="facilities_content">
            {faci.map(({id,picture,header,para})=>{
                return(
                    <div key={id} className="facil_con">
                        <img src={picture} alt="pic" />
                        <h2>{header}</h2>
                        <p>{para}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Facilities