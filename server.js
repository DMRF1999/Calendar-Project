const express = require('express')
const path = require('path');
__dirname = path.resolve();
const logger = require('morgan')
const methodOverride = require('method-override')
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");
require('dotenv').config()
const PORT = normalizePort(process.env.PORT || '3000')


require('./config/passport')(passport)
require('./config/database')
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressEjsLayout);

//Middle ware start
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use('/public', express.static('public'));
app.use(methodOverride('_method'))
app.use(session({
  secret : 'secret',
  resave : true,
  saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
    })

    app.use('/',require('./routes/appRoute'));
    app.use('/users',require('./routes/users'));

app.use(function(req, res, next) {
    next(createError(404))
})


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  app.listen(PORT, ()=>{
    console.log("Connected", PORT)
})


  module.exports = app;