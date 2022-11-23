const express = require("express");
const User = require("../models/User");
// pour les routes
const router = express.Router();
// pour le chiffrement password
const bcrypt = require('bcrypt');
// pour le token
const jwt = require('jsonwebtoken');
// appel au middlware
const { loginRules, registerRules, validation } = require('../middleware/validator');

const isAuth = require("../middleware/passport");

// register 
router.post("/register", registerRules(), validation, async (req, res) => {
    const { nom, prenom, email, password, adresse, sexe,numero_tel, isAdmin } = req.body;
    try {
        // save the user
        const newUser = new User({ nom, prenom, email, password, adresse, sexe, numero_tel,isAdmin })
        //check if the email is already registered
        const searchedUser = await User.findOne({ email })
        if (searchedUser) {
            return res.status(400).send({ msg: "user email is already existed" })
        }
        // hash password
        const salt = 10
        const genSalt = await bcrypt.genSalt(salt);
        const hashPassword = await bcrypt.hash(password, genSalt)
        console.log(hashPassword)
        newUser.password = hashPassword;

        //save the user
        const newUserToken = await newUser.save()
        //gnerate a token 
        const payload = { _id: newUserToken._id, name: newUserToken.name }

        const token = await jwt.sign(payload, process.env.SecretOrKey, { expiresIn: 3600 })
        res.status(200).send({ newUserToken, msg: "user is saved ", token: `Bearer ${token}` })
    } catch (error) {
        res.status(500).send("can not save the user");
    }
});


//login 
router.post('/login', loginRules(), validation, async (req, res) => {
    const { email, password } = req.body;
    try {
        // find if the user exist 
        const searchedUser = await User.findOne({ email });
        //if the email is not existed 
        if (!searchedUser) {
            return res.status(400).send({ msg: "bad Credential" });
        }
        //password are equals 
        // comparaison if password and crypted password are equal
        const match = await bcrypt.compare(password, searchedUser.password);


        if (!match) {
            return res.status(400).send({ msg: "password " })
        }
        // creer un token
        const payload = {
            _id: searchedUser._id,
        };
        const token = await jwt.sign(payload, process.env.SecretOrKey, { expiresIn: 3600 })

        // send the user 
        res.status(200).send({ user: searchedUser, msg: " success ", token: `Bearer ${token}` })

    }
    catch (error) {
        res.status(500).send({ msg: "can not get the user" })
    }

})




//get methode current user

router.get("/current", isAuth(), (req, res) => {
    res.status(200).send({ user: req.user });
});


// get all user 
router.get("/", async (req, res) => {
    try {

        const result = await User.find();
        res.send({ users: result, msg: " all users" })

    } catch (error) {
        console.log(error);
    }
})
// get user by id 
router.get("/:id", async (req, res) => {
   
    try {

        const result = await User.findById(req.params.id);
        res.send({ users: result, msg: " user by id " })

    } catch (error) {
        console.log(error);
    }
})
// update user
router.put("/update/:id", async (req, res) => {
    try {
     const result =await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            ...req.body
          }, 
        },
        { new: true, upsert: true, setDefaultsOnInsert: true },
       
      );
      res.send({user:result,msg:"user is updated successfully"})
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  });
   

// delete user 
router.delete("/delete/:id", async (req, res)=>{
    try {
        await User.delete({ _id: req.params.id }).exec();
        res.status(200).json({ message: "Successfully deleted. " });
      } catch (err) {
        return res.status(500).json({ message: err });
      }
    });

module.exports = router;