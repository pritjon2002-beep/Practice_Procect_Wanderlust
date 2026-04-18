const express = require('express');
const app = express();

const mongoose = require('mongoose');

database()
.then(()=>{
    console.log("Database Connected Sucessfully");
})

.catch((err)=>{
    console.log(err);
    
})

async function database(){
    await mongoose.connect('mongodb://127.0.0.1:27017/practiceWanderlust');
}

app.get("/", (req,res)=>{
    res.send("Welcome to starting page");

})

app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})