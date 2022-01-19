const express = require('express')
const data = express.Router()
const cors = require("cors")
var bodyParser = require('body-parser')

const Fundwork = require('../model/Fundworkschema')
const cashierdata=require('../model/Cashierschema')
const Userdata=require('../model/User')
data.use(cors())
data.use(bodyParser.json())

const add = async (req, res) => {
  const Fwork = {
    purpose:req.body.purpose ,
    userid:req.body.userid,
    cashierid:req.body.cashierid,
    place:req.body.place,
    date:req.body.date,
    amount:req.body.amount,

  }

  Fundwork.findOne({
     userid: req.body.userid
   })
     .then(userid => {
       if (!userid) {
          Fundwork.create(Fwork)
            .then(data => {
              res.json({ status: data + 'added!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
       } 
   
     })
     .catch(err => {
       res.send('error: ' + err)
     })
}

const get = async(req, res) => {
            await Fundwork.find()
            .then(data => {
              res.json(data)            
            })
            .catch(err => {
              res.status(400).json('error: ' + err)
            })
}



module.exports = {
  add: add,
  get: get

}
