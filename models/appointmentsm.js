const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentsSchema = new Schema({
    
    fId: { type: Number, required: true },
    date: { type: Date, default: Date.now }  
})

const Appointments = mongoose.model("Appointment", appointmentsSchema)

module.exports = Appointments;