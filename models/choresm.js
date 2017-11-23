const mongoose = require('mongoose')
const Schema = mongoose.Schema

const choresSchema = new Schema({

    name: { type: String, required: true },
    fId: { type: Number, required: true },
    email: String,
    date: { type: Date, default: Date.now }  
})

const Chores = mongoose.model("Chore", choresSchema)

module.exports = Chores;