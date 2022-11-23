const express=require('express')
const Voyage = require('../models/Voyage');
const VoyageRoute=express.Router()
// add voyage 
VoyageRoute.post('/add',async (req, res)=>{
    try {
        // save the hotel
        const newVoyage = new Voyage(req.body)
        const result= await newVoyage.save()
        
        res.status(200).json({ message: "Voyage is added. ", voyage:result });
}
catch (error) {
    res.status(500).send("can not save voyage");
  console.log(error)}})
// update voyage 
VoyageRoute.put("/update/:id", async (req, res) => {
    try {
     const result =await Voyage.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            ...req.body
          }, 
        },
        { new: true, upsert: true, setDefaultsOnInsert: true },
       
      );
      res.send({updatedVoyage:result,msg:"voyage is updated successfully"})
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  });

// delete voyage 
VoyageRoute.delete("/delete/:id", async (req, res)=>{
    try {
        await Voyage.deleteOne({ _id: req.params.id });
        res.json({message: "Successfully deleted. " });
      } catch (err) {
        console.log(err)
        return res.status(500).json({ message: err });
      }
    }); 
// get all voyage
VoyageRoute.get("/all", async (req, res) => {
    try {

        const result = await Voyage.find();
        res.send({ allVoyage: result, msg: " all voyage" })

    } catch (error) {
        console.log(error);
    }
})
//get voyage by id 
VoyageRoute.get("/:id", async (req, res) => {
   
    try {

        const result = await Voyage.findById(req.params.id);
        res.send({ idVoyage: result, msg: " Voyages by id " })

    } catch (error) {
        console.log(error);
    }
})
// get voyage by filtering 
VoyageRoute.post('/bytype',async(req,res)=>{
    try {
      let result=await Voyage.find(req.body);
        res.send({filtredVoyage:result,msg:' all voyage by type'});}
        catch (error) {
            res.status(400).send({msg:'error getting voyage by type'})
            console.log(error)
            }})

module.exports=VoyageRoute