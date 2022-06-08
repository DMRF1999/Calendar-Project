const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
   title: String,
   date: String,
   description: String
})

const Event = mongoose.model('Event', EventSchema)

module.exports = Event