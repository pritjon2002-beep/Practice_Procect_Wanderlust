// IMPORTS

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Listing = require('./models/listing'); // schema required or listing.js required

// DATABASE CONNECTION
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

// STARTING
app.get("/", (req,res)=>{
    res.send("Welcome to starting page");

})

// TEST EITHER THE DATABASE IS WORKING OR NOT
app.get("/test", async(req,res)=>{
    let sampleListing = new Listing({
        title:" people in Nepal",
        description: "They love Nepal",
        price: 3000,
        location : "Kathmandu",
        country: "Nepal"
    })
    await sampleListing.save();
    console.log("saved");
    res.send("saved sucess");
})

// BACKEND CONNECTION
app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})