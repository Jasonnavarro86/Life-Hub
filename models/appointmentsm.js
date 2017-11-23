const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentsSchema = new Schema({

    name: { type: String, required: true },
    fId: { type: Number, required: true },
    email: String,
    date: { type: Date, default: Date.now }  
})

const Appointments = mongoose.model("Appointment", appointmentsSchema)

module.exports = Appointments;