const res = require('express/lib/response');
const Event = require('../models/event')

const index = (req, res) => {
    Event.find({}, (err, ev) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(ev)
    })
}

let show = (req, res) => {
    Event.findById(req.params.id, (err, ev) => {
        res.render('../views/index.ejs', {Event})
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(ev)
    })
}

let create = (req, res) => {
    Event.create(req.body, (err, ev) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(ev)
    })
}

let deleteIt = (req, res) => {
    Event.findByIdAndDelete(req.params.id, (err, ev) => {
        if(err){
            res.status(400).json(ev)
            return
        }
        res.json(ev)
    })
}

let update = (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body, {new: true} ,(err, ev) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(ev)
    })
}

module.exports = {
    index,
    show,
    create,
    deleteIt,
    update
}