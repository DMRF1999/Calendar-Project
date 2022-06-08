const express = require('express')
const router = express.Router()
const eventCtrl = require('../controllers/event')

router.get('/events', eventCtrl.index)

router.get('/events/:id', eventCtrl.show)

router.post('/events/new', eventCtrl.create)

router.delete('/events/:id', eventCtrl.deleteIt)

router.put('/events/:id', eventCtrl.update)

module.exports = router