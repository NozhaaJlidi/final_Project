const mongoose = require("mongoose")
const schema= mongoose.Schema
const userSchema= new schema({
    nom:{
        type:String, 
        required :true},
    prenom:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true
    },
    password:{
        type:String,
        required :true
    },
    adresse:{
        type:String,
        required :true
    },
    sexe:{
        type:String,
        required :false
    },
    numero_tel:{
        type:Number,
        required :false
    },
    isAdmin:{
        type:Boolean,
        default:false

    },
    
    
})



module.exports= mongoose.model("user",userSchema)