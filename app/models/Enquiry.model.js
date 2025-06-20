let mongoose = require('mongoose') // import mongoose

// Define the schema for user enquiries
// This schema defines the structure of the data that will be stored in the MongoDB collection

let UserEnquirySchema = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },

})

let EnquiryModel = mongoose.model("enquiry", UserEnquirySchema) //enquiry is the name of the collection in MongoDB and UserEnquirySchema is the schema for the collection 

module.exports = EnquiryModel


