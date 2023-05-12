const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Use the `express.urlencoded` middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));


const Product = require('./model/Product');

//render home page
app.get('/', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('home', {products: products});
    })
    .catch((error) => console.log(error.message));
});

//render customer home page
app.get('/customer-home', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('customer-home', {products: products});
    })
    .catch((error) => console.log(error.message));
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});