const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    type: { type: String, required: true },
    image: { type: String, required: false },
    SquareFeet: { type: Number, required: true },
    Price: { type: Number, required: true },
    Address: { type: String, required: true },
    Description: { type: String, required: true },
    YearBuilt: { type: String, required: true },
    Features: { type: String, required: true },
    Location: {
        type: {type: String},
        coordinates:[]
    },
    Owner: { type: String, required: false },
    date: { type: Date, default: Date.now }
});
    
const List = mongoose.model("List", listSchema);

module.exports = List;
