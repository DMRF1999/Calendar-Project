const res = require('express/lib/response')
const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');

function renderHome(req,res){
    res.render('home')
}

function renderSignup(req,res){
    res.render('signup')
    }

//Register handle
function login(req,res,next){
passport.authenticate('local',{
    successRedirect : '/calendar',
    failureRedirect: '/',
    failureFlash : true
})(req,res,next)
}

  //register post handle
  function createUser(req,res){
    const {name,email, password, password2} = req.body;
    let errors = [];
    console.log(' Name ' + name+ ' email :' + email+ ' pass:' + password);
    if(!name || !email || !password || !password2) {
        errors.push({msg : "Please fill in all fields"})
    }
    //check if match
    if(password !== password2) {
        errors.push({msg : "passwords dont match"});
    }
    
    //check if password is more than 6 characters
    if(password.length < 6 ) {
        errors.push({msg : 'password atleast 6 characters'})
    }
    if(errors.length > 0 ) {
    res.render('signup', {
        errors : errors,
        name : name,
        email : email,
        password : password,
        password2 : password2})
     } else {
        //validation passed
       User.findOne({email : email}).exec((err,user)=>{
        console.log(user);   
        if(user) {
            errors.push({msg: 'email already registered'});
            res.render('signup',{errors,name,email,password,password2})  
           } else {
            const newUser = new User({
                name : name,
                email : email,
                password : password
            });
    
            //hash password
            bcrypt.genSalt(10,(err,salt)=> 
            bcrypt.hash(newUser.password,salt,
                (err,hash)=> {
                    if(err) throw err;
                        //save pass to hash
                        newUser.password = hash;
                    //save user
                    newUser.save()
                    .then((value)=>{
                        console.log(value)
                        req.flash('success_msg','You have now registered!');
                        res.redirect('/');
                    })
                    .catch(value=> console.log(value));
                      
                }));
             }
       })
    }
    }

    function logout(req,res){
        req.flash('success_msg','Now logged out');
        res.redirect('/'); 
        }


module.exports = {
    login,
    renderHome,
    createUser,
    renderSignup,
    logout
}