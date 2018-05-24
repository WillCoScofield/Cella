const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/cella",
);

const listSeed = [
    {
        type: "Warehouse",
        image: "http://www.ferraridrivingschool.com/wp-content/uploads/2015/07/warehouse.jpg",
        SquareFeet: 3000,
        Price: 5000,
        Address: "970 Jefferson St NW, Atlanta, GA 30318",
        Description: "It's pretty nice",
        YearBuilt: "1998",
        Features: "Features etc...",
        Location: {
            type: "Point",
            coordinates:[33.775243, -84.418786]
        },
        date: new Date(Date.now())

    },
    {
        type: "Parking Lot",
        image: "https://i.ytimg.com/vi/3K2ZsAzOx_A/hqdefault.jpg",
        SquareFeet: 5000,
        Price: 500,
        Address: "970 Jefferson St NW, Atlanta, GA 30318",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Location: {
            type: "Point",
            coordinates:[33.775243, -84.418786]
        },
        date: new Date(Date.now())

    },
    {
        type: "Plot of Land",
        image: "http://images.unsplash.com/photo-1464295440335-ee082a75ccca?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=87d3c8c4eff97741a87ba2878286109e",
        SquareFeet: 20000,
        Price: 4000,
        Address: "WeWork Colony Square, 1175 Peachtree St NW, Atlanta, GA 30361",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Location: {
            type: "Point",
            coordinates:[33.775243, -84.418786]
        },
        date: new Date(Date.now())

    },
    {
        type: "Warehouse",
        image: "https://previews.123rf.com/images/hansenn/hansenn1404/hansenn140400036/27368778-exterior-of-a-commercial-warehouse-with-yellow-roller-doors.jpg",
        SquareFeet: 1000,
        Price: 10000,
        Address: "70 Courtland St NE, Atlanta, GA 30303",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Location: {
            type: "Point",
            coordinates:[33.7563339, -84.384841]
        },
        date: new Date(Date.now())

    },
    {
        type: "Warehouse",
        image: "https://i.pinimg.com/originals/8b/bc/81/8bbc817e866d94336cbd9d3215a4ae9d.jpg",
        SquareFeet: 4980,
        Price: 10000,
        Address: "1544 Piedmont Ave NE #403-R, Atlanta, GA 30324",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Location: {
            type: "Point",
            coordinates:[33.7981744, -84.37080499999999]
        },
        date: new Date(Date.now())

    },
    {
        type: "Storage Unit",
        image: "https://cf.ltkcdn.net/business/images/std/205120-600x450-storageunit.jpg",
        SquareFeet: 300,
        Price: 75,
        Address: "151 14th St NW, Atlanta, GA 30318",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Location: {
            type: "Point",
            coordinates:[33.7873031, -84.39239479999999]
        },
        date: new Date(Date.now())

    },

    {
        type: "Plot of Land",
        image: "https://investinbg.co.uk/files/1457542443_plot-land-katselovo-dve-mogili-ruse-001.jpg",
        SquareFeet: 1000,
        Price: 10000,
        Address: "123 Parking Lot Place",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Location: {
            type: "Point",
            coordinates:[33.775243, -84.418786]
        },
        date: new Date(Date.now())

    },

    {
        type: "Agriculture Facility",
        image: "https://www.luc.edu/media/lucedu/sustainability-new/images1000x560/Ecodome-2560x1424.jpg",
        SquareFeet: 1000,
        Price: 10000,
        Address: "1150 Allene Ave SW, Atlanta, GA 30310",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Location: {
            type: "Point",
            coordinates:[33.7234699, -84.4129791]
        },
        date: new Date(Date.now())

    },

    {
        type: "Dirt Lot",
        image: "data:image/jpeg;base64,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",
        SquareFeet: 1000,
        Price: 10000,
        Address: "2314, 670 Memorial Dr SE, Atlanta, GA 30312",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Location: {
            type: "Point",
            coordinates:[33.7469027, -84.36550179999999]
        },
        date: new Date(Date.now())

    },

    {
        type: "Freezer Space",
        image: "http://www.commercialpropertiesphilippines.com/wp-content/uploads/2016/01/Industrial-Lot-With-Warehouse-for-Sale-in-Bagumbayan-Taguig.jpg",
        SquareFeet: 1000,
        Price: 10000,
        Address: "135 Memorial Dr SW, Atlanta, GA 30303",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Location: {
            type: "Point",
            coordinates:[33.7471951, -84.3920049]
        },
        date: new Date(Date.now())

    },



]

db.List.remove({})
    .then(() => db.List.collection.insertMany(listSeed))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
        process.exit(0);
    }).catch(err => {
        console.error(err);
        process.exit(1);
    });