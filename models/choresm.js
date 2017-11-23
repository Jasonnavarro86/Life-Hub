const mongoose = require('mongoose')
const Schema = mongoose.Schema

const choresSchema = new Schema({
    
    fId: { type: Number, required: true },
    date: { type: Date, default: Date.now }  
})

const Chores = mongoose.model("Chore", choresSchema)

module.exports = Chores;