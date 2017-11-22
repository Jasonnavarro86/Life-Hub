const mongoose = require('mongoose')
const Schema = mongoose.Schema

const choresSchema = new Schema({


})

const Chores = mongoose.model("Chore", choresSchema)

module.exports = Chores;