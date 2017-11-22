const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kidsSchema = new Schema({


})

const Kids = mongoose.model("Kid", kidsSchema)

module.exports = Kids;