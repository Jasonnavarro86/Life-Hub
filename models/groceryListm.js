const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groceryListSchema = new Schema({
    
    fId: { type: Number, required: true },
    date: { type: Date, default: Date.now }  

})

const GroceryList = mongoose.model("GroceryList", groceryListSchema)

module.exports = GroceryList;