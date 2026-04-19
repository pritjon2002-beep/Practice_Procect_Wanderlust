//  IMPORTS 
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Listing = require('./models/listing.js');

const path = require('path');


//  DATABASE CONNECTION 
async function database() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practiceWanderlust');
        console.log('Database Connected Successfully');
    } catch (err) {
        console.log(err);
    }
}
database();

//  EJS SETUP 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//  MIDDLEWARE 
app.use(express.urlencoded({ extended: true }));



// STARTING
app.get("/", (req,res)=>{
    res.send("Welcome to starting page");

})
// ROUTES

//INDEX ROUTE

app.get("/listings", async(req,res)=>{
    let allListings = await Listing.find();
    res.render("./listings/index.ejs", { allListings });
})

// NEW ROUTE
app.get("/listings/new", async(req,res)=>{
    res.render("./listings/new.ejs");
})


// CREATE ROUTE

app.post("/listings", async(req,res)=>{
    let newListing = new Listing(req.body.listing)
    await  newListing.save();
    res.redirect("./listings");
})


// SHOW ROUTE
app.get("/listings/:id", async(req,res)=>{
    let { id } = req.params;
    let showListing = await Listing.findById(id);
    res.render("./listings/show.ejs", { showListing });
})




// // TEST EITHER THE DATABASE IS WORKING OR NOT
// app.get("/test", async(req,res)=>{
//     let sampleListing = new Listing({
//         title:" people in Nepal",
//         description: "They love Nepal",
//         price: 3000,
//         location : "Kathmandu",
//         country: "Nepal"
//     })
//     await sampleListing.save();
//     console.log("saved");
//     res.send("saved sucess");
// })

// BACKEND CONNECTION
app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})