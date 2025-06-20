const express = require('express')
const { enqInsert, enqList, enqDel, enqEdit } = require('../../Controllers/web/userEnquirycontrollers')

const enquiryRoutes = express.Router()

enquiryRoutes.post('/enquiry-insert', enqInsert)
enquiryRoutes.get('/enquiry-list', enqList)
enquiryRoutes.delete('/enquiry-delete/:id', enqDel)
enquiryRoutes.put('/enquiry-update/:id', enqEdit)


module.exports = enquiryRoutes;