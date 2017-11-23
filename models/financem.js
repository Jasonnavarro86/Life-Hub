const mongoose = require('mongoose')
const Schema = mongoose.Schema

const financeSchema = new Schema({
      
    fId: { type: Number, required: true },
    input: String,
    date: { type: Date, default: Date.now }  
})

const Finance = mongoose.model("Finance", financeSchema)

module.exports = Finance;