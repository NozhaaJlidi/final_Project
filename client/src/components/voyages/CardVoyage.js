import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ReactStars from 'react-stars'

import './../../styles/CardVoyage.css'
const CardVoyage = ({voyage}) => {


  return (
    <>
    <div className="voyage">
      <div className="voyageimage ">
       </div>
          <div className='containerVoyage'>
            <h2> {voyage?.name}</h2>
            <ReactStars
    count={voyage?.nb_etoile}
    size={24}
    activeColor="#ffd700"
  />
  <p> {voyage?.type}</p>
          </div>
          <div className='btn-price'>
            <h3>{voyage?.prix}</h3>
            <button>  voir offre</button>
          </div>
    </div>
    </>
  )
}

export default CardVoyage