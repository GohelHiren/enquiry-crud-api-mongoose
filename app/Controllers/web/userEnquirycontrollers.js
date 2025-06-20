const EnquiryModel = require("../../models/Enquiry.model")

let enqInsert = (req, res) => {

    let { name, email, phone, message } = req.body // get data from request body   

    let edata = new EnquiryModel({
        name: name,
        email: email,
        phone: phone,
        message: message
    })

    edata.save().then(() => {
        res.send({ statu: 1, message: "Enquiry Saved Sucessfully" })
    }).catch((err) => {
        res.send({ status: 0, message: "Error while saving enquiry", erro: err })
    })
}

let enqList = async (req, res) => {
    let enquiryList = await EnquiryModel.find()
    res.send({ status: 1, message: "Enquiry list", data: enquiryList })
}

let enqDel = async (req, res) => {
    let eid = req.params.id
    let delenq = await EnquiryModel.deleteOne({ _id: eid })
    res.send({ status: 1, message: "Enquiry deleted Sucessfully ", id: eid, delres: delenq })
}

let enqEdit = async (req, res) => {
    let eid = req.params.id
    let { name, email, phone, message } = req.body // get data from request body   

    let updateobj = {
        name: name,
        email: email,
        phone: phone,
        message: message
    }
    let upenq = await EnquiryModel.updateOne({ _id: eid }, { $set: updateobj })
    res.send({ status: 1, message: "Enquiry updated Sucessfully ", id: eid, upenq })


}


module.exports = { enqInsert, enqList, enqDel, enqEdit }