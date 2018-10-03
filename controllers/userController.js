const db = require("../models");
const bcrypt = require("bcryptjs");


module.exports = {
  create: function (req, res) {
    console.log("req" +req.body);
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("password", salt);
  
    db.Users.create({
      firstName: "Bob",
      lastName: "Smith",
      email: "nathan.novak79@gmail.com",
      phone: "520-665-9464",
      password: hash
    }).then(function (dbModel) {
      res.json(dbModel);
      console.log("POSTED", dbModel);
    });
  },

  findAll: function (req, res) {
    console.log("Get Saved");
    db.Users.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    console.log(req.params);
    db.Users.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  delete: function (req, res) {
    db.Users.destroy({
      where: { id: req.params.id }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    db.Users.findOne({ where: { email: 'ncortes1415@gmail.com' } })
      .then(dbModel => {
        if (bcrypt.compare("Password", dbModel.password)) {
          db.Users.update({ loggedIn: true }, { where: { id: dbModel.id } })
            .then(result => db.Users.findOne({ where: { id: result } })
              .then(user => res.json(user)))

        }
      })
  },

  logout: function (req, res) {
    db.Users.update({ loggedIn: false }, { where: { id: "1" } })
      .then(dbModel => res.json(dbModel))
  },

 
};
