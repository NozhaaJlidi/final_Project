import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVoyages } from '../../redux/voyageSlice';
import CardVoyage from './CardVoyage';

const ListVoyages = () => {
const dispatch = useDispatch();

    // creere une constannte qui va collecter tous les voyages 
const voyages=useSelector((state)=>state.voyage?.voyages)
return (
<div className="containner">
{voyages?.map((voyage,i)=>

  <CardVoyage  voyage={voyage} key={i}/>
)
}
{/* <h1>{voyage?.name}</h1>
<h2>{voyage?.prix}</h2>
<h3>{voyage?.type}</h3>
<h5>{voyage?.nb_etoile}</h5> */}

</div>

 
)
}

export default ListVoyages