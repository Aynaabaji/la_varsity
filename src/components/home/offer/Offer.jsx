import React from 'react'
import './offer.css'



const off_sec = [
  {
    h3:"Intermediate",
    p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cumque consequatur maiores excepturi dicta, eligendi maxime, adipisci illum aliquid fuga at incidunt? Nobis, iusto quia?"
  },
  {
    h3:"Degree",
    p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cumque consequatur maiores excepturi dicta, eligendi maxime, adipisci illum aliquid fuga at incidunt? Nobis, iusto quia?"
  },
  {
    h3:"Post Graduation",
    p:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cumque consequatur maiores excepturi dicta, eligendi maxime, adipisci illum aliquid fuga at incidunt? Nobis, iusto quia?"
  }
]


const Offer = () => {
  return (
    <div className='offer'>
      <div className="offer_heading">
        <h1>Courses We Offer</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
      </div>
      <div className="offer_content">
        {off_sec.map(({id,h3,p})=>{
          return(
            <div key={id
            } className="off_content">
              <h2>{h3}</h2>
              <p>{p}</p>
            </div>
          )

        })}
        
      </div>
    </div>
  )
}

export default Offer