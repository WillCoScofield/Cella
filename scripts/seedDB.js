const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/cella",
);

const listSeed = [
    {
        type: "Warehouse",
        image: "http://www.commercialpropertiesphilippines.com/wp-content/uploads/2016/01/Industrial-Lot-With-Warehouse-for-Sale-in-Bagumbayan-Taguig.jpg",
        SquareFeet: 1000,
        Price: 10000,
        Address: "123 Parking Lot Place",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Latitude: 33.7764020,
        Longitude: -84.3892600,
        date: new Date(Date.now())

    },
    {
        type: "Parking Lot",
        image: "http://www.commercialpropertiesphilippines.com/wp-content/uploads/2016/01/Industrial-Lot-With-Warehouse-for-Sale-in-Bagumbayan-Taguig.jpg",
        SquareFeet: 1000,
        Price: 10000,
        Address: "123 Parking Lot Place",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Latitude: 60.7764020,
        Longitude: -0.3892600,
        date: new Date(Date.now())

    },
    {
        type: "Plot of Land",
        image: "http://www.commercialpropertiesphilippines.com/wp-content/uploads/2016/01/Industrial-Lot-With-Warehouse-for-Sale-in-Bagumbayan-Taguig.jpg",
        SquareFeet: 1000,
        Price: 10000,
        Address: "123 Parking Lot Place",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Latitude: 46.7764020,
        Longitude: -84.3892600,
        date: new Date(Date.now())

    },
    {
        type: "Abandoned Building",
        image: "http://www.commercialpropertiesphilippines.com/wp-content/uploads/2016/01/Industrial-Lot-With-Warehouse-for-Sale-in-Bagumbayan-Taguig.jpg",
        SquareFeet: 1000,
        Price: 10000,
        Address: "123 Parking Lot Place",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Latitude: 40.7764020,
        Longitude: -84.3892600,
        date: new Date(Date.now())

    },
    {
        type: "Freezer Space",
        image: "http://www.commercialpropertiesphilippines.com/wp-content/uploads/2016/01/Industrial-Lot-With-Warehouse-for-Sale-in-Bagumbayan-Taguig.jpg",
        SquareFeet: 1000,
        Price: 10000,
        Address: "123 Parking Lot Place",
        Description: "It's definitely not a parking lot.",
        YearBuilt: "1998",
        Features: "Features etc...",
        Latitude: 51.5033640,
        Longitude: -0.1276250,
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