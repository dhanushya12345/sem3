const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
process.env.SECRET_KEY = "secret";
const User = require("../model/Cashierschema");


//Register
exports.register = (req, res) => {
  const userData = {
    cashiername: req.body.cashiername,
    experiance:req.body.experiance,
    qualification:req.body.qualification,
    email: req.body.email,
    password: req.body.password,
    dateofjoin:req.body.dateofjoin
  };
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 8, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + "  Registered!" });
            })
            .catch(err => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "cashier already exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
};

//login
exports.login = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            email: user.email,
            password:user.password,
            userType: user.userType
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        } else {
          // Passwords don't match
          res.json({ error: "password Invaid" });
        }
      } else {
        res.json({ error: "you are not register" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
};
