const mongoose = require("mongoose");
const schema = require("mongoose").Schema;
const reservationschema = new schema(
  {
    
    nameClient: { type: String, required: true },
    surnameClient: { type: String, required: true },
    adress: {type:  String ,required: false,},
    telephone: { type: Number, required: false },
    commentaire: { type: String, required: false },
    email: { type: String, required: false },
    nombre_des_personnes: { type: Number, required: true},
    id_hotel:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        required: false,
    },
    id_voyage:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Voyage",
        required: false,
    }
  },
);
 
module.exports = mongoose.model("Reservation", reservationschema);