const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
    type: { type: String, required: true },
    SquareFeet: { type: String, required: true },
    Price: { type: Number, required: true },
    Address: { type: String, required: true },
    Description: { type: String, required: true },
    YearBuilt: { type: Number, required: true },
    Features: {type: String, required: true},
    date: { type: Date, default: Date.now }
});

const List = mongoose.model("List", listSchema);

module.exports = List;
