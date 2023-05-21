const mongoose = require('mongoose');

// Define a schema
const shipperSchema = new mongoose.Schema({
    username: String,
    password: String,
    profilePicture: String,
    distributionHub: String,
});

// Define a model based on the schema
const Shipper = mongoose.model('Shipper', shipperSchema);


// the module exports the "Customer" model so that it can be used by other parts of the application.
module.exports = Shipper;