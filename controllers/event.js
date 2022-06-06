const express = require('express')
const mongoose = require('mongoose')

Event = require('../models/event')

const router = express.Router();

//Fetch Events
const getEvents = async (req,res)=> {
    try{
        const events = await Event.find()
        res.status(200).json(events)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Create Event
const createEvent = async (req,res) => {
    const { title, date } = req.body
    const newEvent = new Event({ title, date})
    try {
        await new Event.save()
        res.status(201).json({
            type: 'success',
            message: 'Event has been added successfully'
        }
        )
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

//Delete single event
const deleteEvent = async (req,res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`)
    await Event.findByIdAndRemove(id)
    res.json({ message: 'Event deleted successfully.' })
}

module.exports = {
    getEvents,
    createEvent,
    deleteEvent
}