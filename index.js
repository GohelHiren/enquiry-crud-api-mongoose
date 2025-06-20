let express = require('express')
let mongoose = require('mongoose')
const enquiryRoutes = require('./app/routes/web/enquiryRoutes')
require('dotenv').config()

let app = express()

app.use(express.json())

app.use('/web/api/enquiry/', enquiryRoutes) 

//http://localhost:8000/web/api/enquiry/enquiry-insert

// connect mongoDB
mongoose.connect(process.env.dburl) // connect to MongoDB using the URL from .env file
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(process.env.port, () => {
            console.log("Server is Running on port http://localhost:" + process.env.port)
        })
    })
