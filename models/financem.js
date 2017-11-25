const mongoose = require('mongoose')
const Schema = mongoose.Schema

const financeSchema = new Schema({
      
    fId: { type: Number, required: true },
    incomeName: String,
    incomeAmount: Number,
    expenseName:String,
    expenseAmount:Number,
    month: String,
    day: String,
    year: String

})

const Finance = mongoose.model("Finance", financeSchema)

module.exports = Finance;