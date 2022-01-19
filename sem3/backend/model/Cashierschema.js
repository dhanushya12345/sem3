const mongoose = require('mongoose')


const CashierSchema = new mongoose.Schema({
 
  cashiername:{
    type:String,
    required:true
  },
  experiance:{
    type:Number,
    required:true
  },
  qualification:{
    type:String,
    required:true
  },
  dateofjoin:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
  
})

module.exports = Cashierdetail = mongoose.model('cashierdetails', CashierSchema)