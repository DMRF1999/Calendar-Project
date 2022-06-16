const express = require('express')
const router = express.Router()
const eventCtrl = require('../controllers/event')
const userCtrl = require('../controllers/user')
const {ensureAuthenticated} = require('../config/auth')

router.get('/events', eventCtrl.showEvents)

router.get('/events/new', eventCtrl.newEvent)

router.post('/events', eventCtrl.createEvent)

router.get('/events/:eventId', eventCtrl.showDetail)

router.patch('/events/:eventId', eventCtrl.updateEvent)

router.delete('/events/:eventId', eventCtrl.deleteEvent)

router.get('/calendar',eventCtrl.renderCalendar)

router.get('/', userCtrl.renderHome)

router.get('/signup', (req,res)=>{
    res.render('signup.ejs');
})
router.get('/calendar',ensureAuthenticated,(req,res)=>{
    res.render('calendar',{
        user: req.user
    });
})

router.get('/login', (req,res)=>{
    res.render('login.ejs');
})


module.exports = router