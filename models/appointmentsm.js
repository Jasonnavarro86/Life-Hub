const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentsSchema = new Schema({


})

const Appointments = mongoose.model("Appointment", appointmentsSchema)

module.exports = Appointments;