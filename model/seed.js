// The "seed.js" file in the model folder is used to populate the database with sample data.

// By running this file, we can quickly and easily populate the database with sample data 
// that can be used for testing or demonstration purposes. 
// It can also be used to populate the database with initial data when the application is first deployed.

const products = [
    {
        image: "p-1.jpg",
        name: "Uniq Outerwear",
        price: 64.95,
        description: "A comfortable and stylish hoodie made from fairtrade materials.",
        vendorName: "Uniqlo",
        subImage: ["p-1a.png","p-1b.png","p-1c.png"]
    },
    {
        image: "p-2.jpg",
        name: "Uniq Shirt",
        price: 59.95,
        description: "A warm and durable zip-up hoodie made with fairtrade cotton.",
        vendorName: "Uniqlo",
        subImage: ["p-1a.png","p-1b.png","p-1c.png"]
    },
    {
        image: "p-3.jpg",
        name: "UV Zip",
        price: 69.95,
        description: "A soft and breathable jersey made with high-quality Rudby cotton.",
        vendorName: "Uniqlo",
        subImage: ["p-1a.png","p-1b.png","p-1c.png"]
    },
    {
        image: "p-4.jpg",
        name: "Dell PC",
        price: 34.95,
        description: "A lightweight and versatile jacket with a premium zip for added durability.",
        vendorName: "GearVN",
        subImage: ["p-1a.png","p-1b.png","p-1c.png"]
    },
    {
        image: "p-5.jpg",
        name: "Razer Headset",
        price: 21.95,
        description: "A classic polo shirt made with fairtrade materials and featuring the RMIT logo.",
        vendorName: "GearVN",
        subImage: ["p-1a.png","p-1b.png","p-1c.png"]
    },
    {
        image: "p-6.jpg",
        name: "Logitech Mouse",
        price: 10,
        description: "A compact and powerful portable charger with multiple USB ports for charging your devices on the go.",
        vendorName: "GearVN",
        subImage: ["p-1a.png","p-1b.png","p-1c.png"]
    }, 
    {
        image: "p-7.jpg",
        name: "Dyson Dryer",
        price: 10,
        description: "A compact and powerful portable charger with multiple USB ports for charging your devices on the go.",
        vendorName: "Dyson",
        subImage: ["p-1a.png","p-1b.png","p-1c.png"]
    }, 
    {
        image: "p-8.jpg",
        name: "Dyson Vacuum",
        price: 10,
        description: "A compact and powerful portable charger with multiple USB ports for charging your devices on the go.",
        vendorName: "Dyson",
        subImage: ["p-1a.png","p-1b.png","p-1c.png"]
    }, 
    {
        image: "p-9.jpg",
        name: "Dyson Pure Cool",
        price: 10,
        description: "A compact and powerful portable charger with multiple USB ports for charging your devices on the go.",
        vendorName: "Dyson",
        subImage: ["p-1a.png","p-1b.png","p-1c.png"]
    }, 
];

let Product = require('./Product');

// Insert many documents
Product.insertMany(products)
.then(() => console.log('Many products are saved'))
.catch((error) => console.log(error.message));


//Create sample vendors collection and insert data
const vendors = [
    {
        username: 'uniqlo',
        password: 'uniqlo1',
        profilePicture: 'v-1.png',
        name: 'Uniqlo',
        address: 'District 1',
    },
    {
        username: 'gearvn',
        password: 'gearvn1',
        profilePicture: 'v-2.png',
        name: 'GearVN',
        address: 'District 2',
    },
    {
        username: 'dyson',
        password: 'dyson1',
        profilePicture: 'v-3.png',
        name: 'Dyson',
        address: 'District 3',
    },
]

let Vendor = require('./Vendor');

// Insert many documents
Vendor.insertMany(vendors)
.then(() => console.log('Many vendors are saved'))
.catch((error) => console.log(error.message));

//Create sample customer collection and insert data
const customers = [
    {
        username: 'hantran',
        password: '12345',
        profilePicture: 'c-1.jpg',
        name: 'Han Tran',
        address: '1234 Main St',
    },
]

let Customer = require('./Customer');

// Insert many documents
Customer.insertMany(customers)
.then(() => console.log('Many customers are saved'))
.catch((error) => console.log(error.message));

//Create sample shipper
const shippers = [
    {
        username: 'locle',
        password: '12345',
        profilePicture: 's-1.jpg',
        distributionHub: 'Ho Chi Minh'
    },
]

let Shipper = require('./Shipper');

// Insert many documents
Shipper.insertMany(shippers)
.then(() => console.log('Many shippers are saved'))
.catch((error) => console.log(error.message));
