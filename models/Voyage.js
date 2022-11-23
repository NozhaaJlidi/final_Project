const mongoose = require("mongoose")
const Schema= mongoose.Schema
const voyageSchema= new Schema({
    name:{
        type:String, 
        required :true},
   type:{
        type:String,
        required :true
    },
    prix:{
        type:Number,
        required :true
    }, 
    description: { type: String, required: false },
    photos: { type: String, required: false }, 
    telephone: { type: String, required: false },
    nb_etoile: { type: Number, required: true },
    id_hotel:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        required: false,
    }
    
})



module.exports= mongoose.model("voyage",voyageSchema)