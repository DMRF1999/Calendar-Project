const express = require('express')
const router = express.Router()
const eventCtrl = require('../controllers/event')

router.get('/events', eventCtrl.showEvents)

router.get('/events/new', eventCtrl.newEvent)

router.post('/events', eventCtrl.createEvent)

router.get('/events/:eventId', eventCtrl.showDetail)

router.patch('/events/:eventId', eventCtrl.updateEvent)

router.delete('/events/:eventId', eventCtrl.deleteEvent)

module.exports = router