const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mainSchema = new Schema({

  name: { type: String, required: true },
  fId: { type: Number, required: true },
  email: String,
  date: { type: Date, default: Date.now }  

});

const Main = mongoose.model("Main", mainSchema)

module.exports = Main;