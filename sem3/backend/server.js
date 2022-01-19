var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

const mongoURI = 'mongodb://localhost:27017/fundingapp';
mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify :false })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./route/CustomerRoute')
app.use('/api', Users)
var Fundwork = require('./route/FundworkRoute')
app.use('/api', Fundwork) 
var Cashierdetails = require('./route/CashierRoute')
app.use('/api', Cashierdetails) 
var Admindetails = require('./route/AdminRoute')
app.use('/api', Admindetails) 
// var FundCollection = require('./route/FundCollectionRoute')
// app.use('/api', FundCollection) 





app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})
