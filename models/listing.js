const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 

    description: {
        type: String,

    },

    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
    default: "https://unsplash.com/photos/3d-render-modern-bedroom-nE6_e2G5rBI",
            set: (v)=> v === "" ? "https://unsplash.com/photos/3d-render-modern-bedroom-nE6_e2G5rBI" : v,

}
    },

    price: {
        type: Number,
        min: 0,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }

});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;

