const express=require('express')
const Reservation = require('../models/Reservation');
const ReservationRoute=express.Router()
// add reservation
ReservationRoute.post('/add',async (req, res)=>{
    try {
        // save the reservation
        const newReservation =await new Reservation(req.body)
        newReservation.save()
        res.status(200).json({ message: "reservartion is added. ", post:newReservation });
      
} catch (error) {
    res.status(500).send("can not save the reservation");}})

// delete the reservation
ReservationRoute.delete("/delete/:id", async (req, res)=>{
    try {
        await Reservation.deleteOne({ _id: req.params.id });
        res.json({ message: "Successfully deleted. " });
      } catch (err) {
        console.log(err)
        return res.status(500).json({ message: err });
      }
    }); 
// get all reservation  
ReservationRoute.get("/", async (req, res) => {
    try {

        const result = await Reservation.find();
        res.send({ reservations: result, msg: " all reservations" })

    } catch (error) {
        console.log(error);
    }
})
//update the reseravtion
ReservationRoute.put("/update/:id", async (req, res) => {
    try {
     const result =await Reservation.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            ...req.body
          }, 
        },
        { new: true, upsert: true, setDefaultsOnInsert: true },
       
      );
      res.send({Reservation:result,msg:"reservation is updated successfully"})
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  });

// get reservation by id
ReservationRoute.get("/:id", async (req, res) => {
   
    try {

        const result = await Reservation.findById(req.params.id);
        res.send({ reservations: result, msg: " reservation by id " })

    } catch (error) {
        console.log(error);
    }
})

//get reservation by type 
///ReservationRoute.get('/bytype/:type',async(req,res)=>{
   // try {let result=await Reservation.find({type:req.params.type});
     ///   res.send({reservations:result,msg:'get all reservations by type'});}
        //catch (error) {
          //  res.status(400).send({msg:'error getting reservations by type'})
            //console.log(error)
            //}})
    module.exports=ReservationRoute