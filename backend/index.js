const express=require('express');
const mongoose=require('mongoose');
const dotenv=require("dotenv");
var cors=require('cors');
const app=express();

// add schema 
const students=require("./models/studSchema");

//add routes
const router=require("./routes/router");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(router);

mongoose.connect(process.env.Database).then(()=>{

    console.log("Database connction done");
}).catch((error)=>{
    console.log(error);

});

app.listen(6000);
