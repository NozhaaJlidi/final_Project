const express = require("express")
const connectDB = require('./config/dbConnect')
const app= express();
require('dotenv').config()
// connect to database
connectDB(); 
//initialization
const cors=require('cors')
app.use(cors())
//routes
// pour qu'il permt de lire les données de type json 
app.use(express.json())
//creartion des routes 
app.use("/user",require("./routes/user"))
app.use("/hotel", require("./routes/hotel"));
app.use("/voyage", require("./routes/voyage"))
app.use("/reservation", require("./routes/reservation"))




// server configuration
const PORT= process.env.PORT;
app.listen(PORT,(err)=> 
err ?console.log(err):console.log(`Server listening on PORT ${PORT}`))