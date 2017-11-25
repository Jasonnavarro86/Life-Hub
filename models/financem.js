const mongoose = require('mongoose')
const Schema = mongoose.Schema

const financeSchema = new Schema({
      
    fId: { type: Number, required: true },
    incomeName: String,
    incomeAmount: {type: Number, default: 0},
    expenseName:String,
    expenseAmount:{type: Number, default: 0},
    month: String,
    day: String,
    year: String,
    incomeBool: Boolean,
    date: { type: Date, default: Date.now } ,

})

const Finance = mongoose.model("Finance", financeSchema)

module.exports = Finance;