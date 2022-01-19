const express = require('express')
const data = express.Router()
const cors = require("cors")
var bodyParser = require('body-parser')

const FundCollection=require('../model/FundCollectionschema')
const cashierdata=require('../model/Cashierschema')
const Userdata=require('../model/User')
data.use(cors())
data.use(bodyParser.json())

const add = async (req, res) => {
  const Fwork = {
    userid:req.body.userid,
    cashierid:req.body.cashierid,
    place:req.body.place,
    date:req.body.date,
    month:req.body.month,
    amount:req.body.amount,

  }

  FundCollection.findOne({
     userid: req.body.userid
   })
     .then(userid => {
       if (!userid) {
          FundCollection.create(Fwork)
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
            await FundCollection.find()
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
