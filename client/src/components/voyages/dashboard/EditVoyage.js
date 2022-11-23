import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faWind } from "@fortawesome/free-solid-svg-icons";
import { updateVoyage } from '../../../redux/voyageSlice';

const EditVoyage = () => {
    const location = useLocation();
    const { voyage } = location.state
    const [newVoyage, setNewVoyage] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [ping, setPing] = useState(false);

    const handleChange = (id) => {
        dispatch(updateVoyage({ id, voyage: newVoyage }));
        setPing(!ping);
    };
  return (
    <div className="container-fluid">
      <div className="row">
      <input
        name="name "
        type="text"
        placeholder="Name "
        onChange={(e) => setNewVoyage({ ...voyage, name: e.target.value })}
        defaultValue={voyage.name}
      />
        
        <p>
        <input
        name="nb_etoile"
        type="Number"
        max={5}
        placeholder="Nombre des etoiles ..."
        onChange={(e) => setNewVoyage({ ...voyage, nb_etoile: e.target.value })}
        defaultValue={voyage.nb_etoile}
      /> 
          
        </p>
      </div>

      <div className="row">
      <input
        name="photos "
        type="text"
        placeholder="image"
        onChange={(e) => setNewVoyage({ ...voyage, photos: e.target.value })}
        defaultValue={voyage.photos}
      />

      
        
      </div>
      <div  className="row">

      <textarea required="" cols="60" rows="10" placeholder="Description du voyage"
       onChange={(e) => setNewVoyage({ ...voyage, description: e.target.value })}
       defaultValue={voyage. description}>
       </textarea>
      </div>
      <div className="row">
        <h1>Services & équipements</h1>
        <div className="row-cols-2 ">
          <div className="col facilities_1">
            <FontAwesomeIcon icon={faWind}></FontAwesomeIcon>Climatisation{" "}
          </div>
          <div className="col facilities_1">Téléphone avec ligne directe</div>
          <div className="col facilities_1">Restaurant</div>
          <div className="col facilities_1">Plage</div>
          <div className="col facilities_1">Club de remise en forme</div>
          <div className="col facilities_1">Coffre fort</div>
          <div className="col facilities_1">Centre d'affaires</div>
          <div className="col facilities_1">Massage</div>
          <div className="col facilities_1">Centre de remise en forme</div>
          <div className="col facilities_1">Piscine</div>
          <div className="col facilities_1">Télévision</div>
        </div>
      </div>
      <div className="row">
      <h3>Numéro pour reserver: 
      <input
        name="telephone"
        type="number"
        placeholder="Numéro telephone "
        onChange={(e) => setNewVoyage({ ...voyage, telephone: e.target.value })}
        defaultValue= {voyage.telephone}
      />
       </h3>
      </div>
      <input
        list="categorie"
        name="type"
        type="text"
        placeholder="type"
        required
        onChange={(e) => setNewVoyage({ ...voyage, type: e.target.value })}
        defaultValues={voyage.type}
      />

      <datalist id="categorie">
        <option>Choisissez le type de voyage</option>
        <option> voyage Dans le monde </option>
        <option> Séjour en Tunisie </option>
      </datalist>
      <div className="row">
      <input
        name="prix"
        type="Number"
        placeholder="prix ..."
        onChange={(e) => setNewVoyage({ ...voyage, prix: e.target.value })}
        defaultValue={voyage.prix}
      />
   
      
      
      </div>
      <button type="submit" className='btn_modal'
                            onClick={async() =>{
                                const response = await window.confirm('est ce que voudgqeshdgzkj')
                                if (response){
                                    handleChange(voyage?._id);
                                    setTimeout(() => {
                                        alert('Votre annonce a été mis à jour')
                                        navigate('/list')
                                    }, 1200);
                                }
                                }
                               }  
                               >
                            Modifier
                        </button>
    </div>
  )
}

export default EditVoyage