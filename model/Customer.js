
const mongoose = require('mongoose');

// Define a schema
const customerSchema = new mongoose.Schema({
    username: String,
    password: String,
    profilePicture: String,
    name: String,
    address: String,
});

// Define a model based on the schema
const Customer = mongoose.model('Customer', customerSchema);


// the module exports the "Customer" model so that it can be used by other parts of the application.
module.exports = Customer;