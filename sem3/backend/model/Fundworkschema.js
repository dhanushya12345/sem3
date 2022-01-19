const mongoose = require('mongoose')


const FundSchema = new mongoose.Schema({
  purpose:{
    type:String,
    required:true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  cashierId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cashierdetails'
  },
  place:{
    type:String,
    required:true
  },
  date:{
     type:Date,
      required:true
  },
  amount:{
    type:Number,
  }
})

module.exports = Funddetail = mongoose.model('funddetails', FundSchema)
