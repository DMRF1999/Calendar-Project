const res = require('express/lib/response');
const Event = require('../models/event')
const calendar = require('../controllers/calendar')

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

async function showDetail(req, res) {
    console.log('Show Detail Function Ran')
    console.log(req.params.eventid)
    let event = await Event.findById(req.params.eventId)
    res.render('eventDetail', {event})
    Event.findById(req.params.eventId, function(err, event){
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

async function deleteEvent(req,res) {
    console.log('Delete function ran!')
    await Event.deleteOne({ _id: req.params.eventId})
    Event.findByIdAndDelete(req.params.eventId)
    res.redirect('/events')
}


function renderCalendar(req,res){
    const year = req.query.year || 2022;
    const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  
    res.render("calendar",{calendar: calendar(year),months,year});
  };




module.exports= {
    newEvent,
    createEvent,
    showEvents,
    showDetail,
    updateEvent,
    deleteEvent,
    renderCalendar
}