import React, { useState } from "react";
import { render } from "react-dom";
import ReactStars from "react-stars";
import { useDispatch } from "react-redux";
import { newVoyage } from "../../../redux/voyageSlice";

const AddVoyage = () => {
  const [voyage, setVoyage] = useState({});

  const dispatch = useDispatch();
  return (
    <div>
      <input
        name="name "
        type="text"
        placeholder="Name "
        onChange={(e) => setVoyage({ ...voyage, name: e.target.value })}
      />
       <textarea required="" cols="60" rows="10" placeholder="Description du voyage">
       onChange={(e) => setVoyage({ ...voyage, description: e.target.value })}

       </textarea>
     
      <input
        name="telephone"
        type="number"
        placeholder="Numéro telephone "
        onChange={(e) => setVoyage({ ...voyage, telephone: e.target.value })}
      />
      <input
        list="categorie"
        name="type"
        type="text"
        placeholder="type"
        required
        onChange={(e) => setVoyage({ ...voyage, type: e.target.value })}
      />

      <datalist id="categorie">
        <option>Choisissez le type de voyage</option>
        <option> voyage Dans le monde </option>
        <option> Séjour en Tunisie </option>
      </datalist>

      <input
        name="photos "
        type="text"
        placeholder="image"
        onChange={(e) => setVoyage({ ...voyage, photos: e.target.value })}
      />
      <input
        name="nb_etoile"
        type="Number"
        max={5}
        placeholder="Nombre des etoiles ..."
        onChange={(e) => setVoyage({ ...voyage, nb_etoile: e.target.value })}
      />
      <input
        name="prix"
        type="Number"
        placeholder="prix ..."
        onChange={(e) => setVoyage({ ...voyage, prix: e.target.value })}
      />
      {/* ajouter input pour le prix */}
      <button type="submit" onClick={() => dispatch(newVoyage(voyage))}>
        {/* (voyage) varible mawjouda f slice nthbtou gbal  */}
        Ajouter voyage
      </button>
    </div>
  );
};

export default AddVoyage;
