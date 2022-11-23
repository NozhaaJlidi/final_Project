import React, { useState } from 'react'
import { render } from 'react-dom'
import ReactStars from 'react-stars'
import {useDispatch} from 'react-redux'
import { newVoyage } from '../../../redux/voyageSlice'

const AddVoyage = () => {
    const [voyage,setVoyage] = useState({});
    
const dispatch=useDispatch();
  return (
    <div>
       <input name="name "type="text" placeholder="Name "
        onChange={(e)=>setVoyage({...voyage,name:e.target.value})} />
        <input name="description"type="text" placeholder="Description" 
        onChange={(e)=>setVoyage({...voyage,description:e.target.value})}/>
        <input name="telephone"type="number" placeholder="Numéro telephone " 
         onChange={(e)=>setVoyage({...voyage,telephone:e.target.value})}/>
        <input name="type"type="text" placeholder="type" 
         onChange={(e)=>setVoyage({...voyage,type:e.target.value})}/>
        <input name="photos "type="file"  accept='image' 
         onChange={(e)=>setVoyage({...voyage,photos:e.target.value})}/>
        <input name='nb_etoile' type="Number" max={5} placeholder='Nombre des etoiles ...'
        onChange={(e)=>setVoyage({...voyage,nb_etoile:e.target.value})}/>
         <input name='prix' type="Number" placeholder='prix ...'
        onChange={(e)=>setVoyage({...voyage,prix:e.target.value})}/>
        {/* ajouter input pour le prix */}
        <button type='submit'
        onClick={()=>dispatch(newVoyage(voyage)) }>
          {/* (voyage) varible mawjouda f slice nthbtou gbal  */}
          Ajouter voyage 
        </button>
    </div>
  )
}

export default AddVoyage