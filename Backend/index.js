require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/shop");

const express =require('express');
const cors = require("cors");

const app =express();

app.use(express.json())
app.use(cors());
app.use(express.static('public'))

const port =process.env.SERVER_PORT || 8060

//authRoute
const authRoute = require('./routes/authRoute')
app.use('/api',authRoute);


//adminRoute
const adminRoute = require('./routes/adminRoute')
app.use('/api/admin',adminRoute);


app.use("/api/img", express.static("./public/upload")); 



app.listen(port,()=>{
  console.log("serveris running on port" + port)  
})

