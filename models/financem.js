const mongoose = require('mongoose')
const Schema = mongoose.Schema

const financeSchema = new Schema({
      
    fId: { type: Number, required: true },
    incomeName: String,
    incomeAmount: {type: Number, default: 0},
    incomeBool: Boolean,
    expenseName:String,
    expenseAmount:{type: Number, default: 0},
    expenseBool: Boolean,
    billName: String,
    billAmount: {type: Number, default: 0},
    billBool: Boolean,
    month: String,
    day: String,
    year: String,
   
    
    date: { type: Date, default: Date.now } ,

})

const Finance = mongoose.model("Finance", financeSchema)

module.exports = Finance;