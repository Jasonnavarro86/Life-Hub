const mongoose = require('mongoose')
const Schema = mongoose.Schema

const financeSchema = new Schema({

    name: { type: String, required: true },
    fId: { type: Number, required: true },
    email: String,
    date: { type: Date, default: Date.now }  
})

const Finance = mongoose.model("Finance", financeSchema)

module.exports = Finance;