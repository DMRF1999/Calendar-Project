const res = require('express/lib/response')
const User = require('../models/user')


function renderHome(req,res) {
    res.render('home')
}

function renderSignup(req,res) {
    res.render('signup')
}

function renderLogin(req,res) {
    res.render('login')
}

function createUser(req,res){
    let newUser = new User(req.body)
    newUser.save(() => console.log("New user was saved!"))
    res.redirect('/calendar')
}

function loginUser(req,res) {
    if(User.findOne == User(req.body.username), User.findOne == User(req.body.password)){
        console.log('Login successful')
        res.redirect('/calendar')
    } else {
        console.log('Unsuccessful')
        res.redirect('/')
    }
}


module.exports = {
    renderHome,
    createUser,
    renderSignup,
    renderLogin,
    loginUser
}