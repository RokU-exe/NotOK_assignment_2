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
const Vendor = require('./model/Vendor');
const Customer = require('./model/Customer');

/*========================= Home page =========================*/
//render home page
app.get('/', (req, res) => {
    res.render('home')
});

/*========================= Customer =========================*/
//render customer login page
app.get('/login/customer', (req, res) => {
    res.render('customer-login');
});
//render shipper login page
app.get('/login/shipper', (req, res) => {
    res.render('shipper-login');
});
//authentication and navigate to customer-home page 
app.post('/customer/all-products', async (req, res) => {
    let username = req.body.cusUsername;
    let password = req.body.cusPassword;

    let products = await Product.find();
    let vendors = await Vendor.find();

    await Customer.findOne({username:username})

    .then((customer) => {
        if(customer){
            if(password != customer.password){
                console.log("Wrong username or password")
                res.render('customer-login');
            }
            else{
                console.log("Customer login sucess");
                let viewData = {products, vendors};
                res.render('customer-home', viewData);
            }
        }
        else{
            console.log("No user found!");
            res.render('customer-login');
        }
      })
    .catch((error) => res.send(error));
});

//render register page
app.get('/register', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('register', {products: products});
    })
    .catch((error) => console.log(error.message));
});

//Price filtering in customer-home
app.get('/price-filter', async (req, res) => {
    const minPrice = req.query.min;
    const maxPrice = req.query.max;
    
    let vendors = await Vendor.find();

    let products = await Product.find({price:{$gte: minPrice, $lte:maxPrice}})
    .then((products) => {
        let viewData = {products, vendors}
        res.render('customer-home', viewData);
      })
      .catch((error) => res.send(error));
});

//Name search
app.get('/filter', async (req, res) => {
    let search = req.query.search;

    let vendors = await Vendor.find();

    await Product.find({name: search})
    .then((products) => {
        let viewData = {products, vendors}
        res.render('customer-home', viewData);
      })
      .catch((error) => res.send(error));
});

//render order page
app.get('/order', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('order', {products: products});
    })
    .catch((error) => console.log(error.message));
});

//render checkout page
app.post('/checkout', (req, res) => {
    Product.find({ _id: { $in: req.body.products } })
    .then((products) => {
        res.render('order-summary', {customerName: `${req.body.firstName} ${req.body.lastName}`, products: products});
    })
    .catch((error) => {
        console.log(error.message);
    });
});
/*========================= Vendor =========================*/
//render vendor login page
app.get('/login/vendor', (req, res) => {
    res.render('vendor-login');
});

//authentication and navigate to vendor view all products
app.post('/vendor/view-products', async (req, res) => {
    let username = req.body.venUsername;
    let password = req.body.venPassword;
    console.log(username);

    let products = await Product.find();

    await Vendor.findOne({username:username})  
    .then((vendor) => {
        if(vendor){
            if(password != vendor.password){
                console.log("Wrong username or password");
                res.render('vendor-login');
            }
            else{
                console.log("Vendor login sucess");
                Product.find({vendorName:vendor.name})
                .then((products) => {
                    res.render('view-my-product', {products:products});
                })
                .catch((error) => res.send(error));
            }

        }
        else{
            console.log("No user found!");
            res.render('vendor-login');
        }
      })
    .catch((error) => res.send(error));
});

//render register page
app.get('/register', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('register', {products: products});
    })
    .catch((error) => console.log(error.message));
});

app.get('/vendor/add-new-product', (req, res) => {
    res.render('add-new-product');
});

/*=========================  Product =========================*/
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



/*========================= Privacy =========================*/
//render privacy page
app.get('/privacy', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('privacy', {products: products});
    })
    .catch((error) => console.log(error.message));
});

/*========================= Shipper =========================*/
//render shipper page
app.get('/shipper', (req, res) => {
    Product.find()
    .then((products) => {
        res.render('shipper', {products: products});
    })
    .catch((error) => console.log(error.message));
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
  });