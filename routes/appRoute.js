const express = require('express')
const router = express.Router()
const eventCtrl = require('../controllers/event')
const userCtrl = require('../controllers/user')

router.get('/events', eventCtrl.showEvents)

router.get('/events/new', eventCtrl.newEvent)

router.post('/events', eventCtrl.createEvent)

router.get('/events/:eventId', eventCtrl.showDetail)

router.patch('/events/:eventId', eventCtrl.updateEvent)

router.delete('/events/:eventId', eventCtrl.deleteEvent)

router.get('/calendar',eventCtrl.renderCalendar)

router.get('/',userCtrl.renderHome)

router.get('/signup',userCtrl.renderSignup)

router.post('/signup',userCtrl.createUser)

router.get('/login',userCtrl.renderLogin)

router.get('/login',userCtrl.loginUser)


module.exports = router