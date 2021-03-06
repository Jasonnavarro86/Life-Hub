const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kidsSchema = new Schema({

    fId: { type: Number, required: true },
    date: { type: Date, default: Date.now }  
})

const Kids = mongoose.model("Kid", kidsSchema)

module.exports = Kids;