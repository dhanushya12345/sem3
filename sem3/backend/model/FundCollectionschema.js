const mongoose = require('mongoose')


const FundCollectionSchema = new mongoose.Schema({
  cashierId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cashierdetails'
  }, 
  userId:{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'users'
},
  date:{
    type:String,
    required:true,
  },
  month:{
    type:String,
    required:true,
  },
  amount:{
    type:Number,
    required:true,
  },
})

module.exports = Collection = mongoose.model('fundcollection', FundCollectionSchema)