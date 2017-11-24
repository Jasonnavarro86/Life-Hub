const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mainSchema = new Schema({

  name: { type: String, required: true },
  fId: { type: Number, required: true },
  email: String,
  date: { type: Date, default: Date.now } ,
  
  finance:[{
    type: Schema.Types.ObjectId,
    ref: "Finance"}],

  groceryList:[{
    type: Schema.Types.ObjectId,
    ref: "GroceryList"}],

  kids:[{
    type: Schema.Types.ObjectId,
    ref: "Kids"}],
         
  chores:[{
    type: Schema.Types.ObjectId,
    ref: "Chores"}], 
  
  appointments:[{
    type: Schema.Types.ObjectId,
    ref: "Appointments"}],

});

const Main = mongoose.model("Main", mainSchema)

module.exports = Main;