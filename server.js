const express = require('express')
const path = require('path');
const PORT = 3000
const app = express()
const eventRoutes = require('./routes/events')
const cors = require('cors')
require('./config/database')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middle ware start
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
//Middleware end

//Routes start
app.use('/', eventRoutes)
//Routes end

app.listen(PORT, () => {
    console.log(`PORT: ${PORT}`)
})