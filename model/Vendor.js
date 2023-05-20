const mongoose = require('mongoose');

// Define a schema
const vendorSchema = new mongoose.Schema({
    username: String,
    password: String,
    profilePicture: Number,
    name: String,
    address: String,
});

// Define a model based on the schema
const Vendor = mongoose.model('Vendor', vendorSchema);


// the module exports the "Product" model so that it can be used by other parts of the application.
module.exports = Vendor;