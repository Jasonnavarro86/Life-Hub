const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groceryListSchema = new Schema({


})

const GroceryList = mongoose.model("GroceryList", groceryListSchema)

module.exports = GroceryList;