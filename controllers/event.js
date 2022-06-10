const res = require('express/lib/response');
const Event = require('../models/event')

function createEvent(req,res){
    let newEvent = new Event(req.body)
    newEvent.save(() => console.log("New event was saved!"))
    res.redirect('/events')
}

function newEvent(req,res){
    res.render('newEvent')
}

async function showEvents(req, res) {
    let allEvents = await Event.find({})
    res.render('index', {allEvents})
}

function showDetail(req, res) {
    console.log('Show Detail function ran')
    console.log(req.params.eventId)
    Event.findById(req.params.eventId).then((event) => {
        console.log(event)
        res.render('eventDetail', {event})
    })
}

async function updateEvent(req, res) {
    console.log('Update function ran!')
    console.log(req.params.eventId)
    console.log(req.body)
    await Event.findByIdAndUpdate(req.params.eventId, req.body)
    // mongoose update
    res.redirect(`/events/${req.params.eventId}`)
}

function deleteEvent(req,res) {
    console.log('Delete function ran!')

    //write mongoose delete code
    // await Cat.deleteOne({ _id: req.params.catId})
    Event.findByIdAndDelete(req.params.eventId)

    res.redirect('/events')
}

module.exports= {
    newEvent,
    createEvent,
    showEvents,
    showDetail,
    updateEvent,
    deleteEvent
}