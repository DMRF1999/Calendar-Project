const express = require('express')

const eventCtrl = require('../controllers/event')

const router = express.Router()

router.get('/get_events', eventCtrl.getEvents)
router.post('/add_events', eventCtrl.createEvent)
router.delete('/delete_event/:id', eventCtrl.deleteEvent)

module.exports = router