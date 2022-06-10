const express = require('express')
const router = express.Router()
const eventCtrl = require('../controllers/event')

router.get('/events', eventCtrl.showEvents)

router.get('/events/new', eventCtrl.newEvent)

router.post('/events', eventCtrl.createEvent)

router.get('/events/:Id', eventCtrl.showDetail)

router.patch('/events/:Id', eventCtrl.updateEvent)

router.delete('/events/:id', eventCtrl.deleteEvent)

module.exports = router