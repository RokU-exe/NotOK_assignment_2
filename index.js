const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://s3955317:0933720429Xl@cluster0.a1mxv8a.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Conected to MongoDB Atlas'))
.catch((error) => console.log(error.message));
