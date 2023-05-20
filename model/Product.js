const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hantran:van456@cluster0.p82asga.mongodb.net/lazadaStore?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));

// Define a schema
const productSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    description: String,
    vendorName: String,
    subImage: Array
});

// Define a model based on the schema
const Product = mongoose.model('Product', productSchema);


// the module exports the "Product" model so that it can be used by other parts of the application.
module.exports = Product;







