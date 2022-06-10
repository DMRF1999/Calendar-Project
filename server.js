const express = require('express')
const PORT = 3000
const app = express()
const cors = require('cors')
const path = require('path');

require('./config/database')
const eventRoutes = require('./routes/events')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middle ware start
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(cors())
//Middleware end

//Routes start
app.use('/', eventRoutes)
//Routes end

app.listen(PORT, () => {
    console.log(`PORT: ${PORT}`)
})

//Change test