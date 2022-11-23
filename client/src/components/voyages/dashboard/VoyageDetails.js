import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./VoyageDetails.css";
import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faWind } from "@fortawesome/free-solid-svg-icons";

const VoyageDetails = () => {
  const location = useLocation();
  const { voyage } = location.state;
  return (
    <div className="container-fluid">
      <div className="row">
        <h1>{voyage.name}</h1>
        <p>
          <ReactStars count={voyage?.nb_etoile} size={24} Color="#ffd700" />
        </p>
      </div>
      <div className="row">
        <img src={voyage.photos} alt=""></img>
      </div>
      <div  className="row">
      <textarea required="" cols="60" rows="10" placeholder="Description du voyage">
{voyage. description}
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
      <h3>Numéro pour reserver: {voyage.telephone}</h3>
      </div>
    
      <div className="row">
      <h5>Prix du voyage {voyage.prix} dt</h5> 
      
      
      </div>


      <Link to='editvoyage' voyage={voyage}>

      <button type="submit">
        Modifier
        
      </button>
      </Link>
    </div>
  );
};

export default VoyageDetails;
