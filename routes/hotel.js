const express=require('express')
const Hotel = require('../models/Hotel');
const HotelRoute=express.Router()
// add Hotel
HotelRoute.post('/add',async (req, res)=>{
    try {
        // save the hotel
        const newHotel =await new Hotel(req.body)
        newHotel.save()
        res.status(200).json({ message: "Hotel is added. ", post:newHotel });
      
} catch (error) {
    res.status(500).send("can not save the hotel");}})

// delete the hotel
HotelRoute.delete("/delete/:id", async (req, res)=>{
    try {
        await Hotel.deleteOne({ _id: req.params.id });
        res.json({ message: "Successfully deleted. " });
      } catch (err) {
        console.log(err)
        return res.status(500).json({ message: err });
      }
    }); 
// get all hotels 
HotelRoute.get("/", async (req, res) => {
    try {

        const result = await Hotel.find();
        res.send({ hotels: result, msg: " all hotels" })

    } catch (error) {
        console.log(error);
    }
})
//update the hotel
HotelRoute.put("/update/:id", async (req, res) => {
    try {
     const result =await Hotel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            ...req.body
          }, 
        },
        { new: true, upsert: true, setDefaultsOnInsert: true },
       
      );
      res.send({hotel:result,msg:"hotel is updated successfully"})
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  });

// get hotel by id
HotelRoute.get("/:id", async (req, res) => {
   
    try {

        const result = await Hotel.findById(req.params.id);
        res.send({ Hotels: result, msg: " Hotels by id " })

    } catch (error) {
        console.log(error);
    }
})

//get hotel by type 
HotelRoute.get('/bytype/:type',async(req,res)=>{
    try {let result=await Hotel.find({type:req.params.type});
        res.send({hotels:result,msg:'get all hotel by type'});}
        catch (error) {
            res.status(400).send({msg:'error getting hotel by type'})
            console.log(error)
            }})
    module.exports=HotelRoute