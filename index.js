// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: NotOk Group
// - Tran Nguyen Ngoc Han (s3963227)
// - Truong Loc Thien (s3924695)
// - Le Xuan Loc (s3955317)
// - Do Xuan Gia Bao (s3932184)
// Acknowledgement: 
// - https://github.com/TomHuynhSG/COSC2430-Web-Programming-materials.git

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

//render login page
app.get('/login', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('login', {products: products});
    })
    .catch((error) => console.log(error.message));
});

//render register page
app.get('/register', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('register', {products: products});
    })
    .catch((error) => console.log(error.message));
});

//render customer home page and get all products
app.get('/customer-home', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('customer-home', {products: products});
    })
    .catch((error) => console.log(error.message));
});
//render privacy page
app.get('/privacy', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('privacy', {products: products});
    })
    .catch((error) => console.log(error.message));
});
//render shipper page
app.get('/shipper', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('shipper', {products: products});
    })
    .catch((error) => console.log(error.message));
});
//render vendor page
app.get('/vendor', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('vendor', {products: products});
    })
    .catch((error) => console.log(error.message));
});
//get product based on their ID to view product detail pages
app.get('/product/:id', (req, res) => {
    Product.findById(req.params.id)
    .then((product) => {
      if (!product) {
        return res.send("Cannot found that ID!");
      }
      res.render('product', {product: product});
    })
    .catch((error) => res.send(error));
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});