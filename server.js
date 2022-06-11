const express = require('express')
const path = require('path');
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const methodOverride = require('method-override')
const PORT = 3000

const eventRoutes = require('./routes/events')
require('./config/database')

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middle ware start
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(methodOverride('_method'))
app.use('/', eventRoutes)

app.use(function(req, res, next) {
    next(createErrior(404))
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