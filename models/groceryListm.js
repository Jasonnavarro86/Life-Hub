const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groceryListSchema = new Schema({
    name: { type: String, required: true },
    fId: { type: Number, required: true },
    email: String,
    date: { type: Date, default: Date.now }  

})

const GroceryList = mongoose.model("GroceryList", groceryListSchema)

module.exports = GroceryList;