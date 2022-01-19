const mongoose = require('mongoose')


const AdminSchema = new mongoose.Schema({
 
  adminname:{
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

module.exports = Admindetail = mongoose.model('admindetails', AdminSchema)