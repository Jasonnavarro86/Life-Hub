const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kidsSchema = new Schema({

    name: { type: String, required: true },
    fId: { type: Number, required: true },
    email: String,
    date: { type: Date, default: Date.now }  
})

const Kids = mongoose.model("Kid", kidsSchema)

module.exports = Kids;