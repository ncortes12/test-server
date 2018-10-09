const db = require("../models");
const bcrypt = require('bcryptjs');

// Defining methods for the brewersController
module.exports = {

  create: function (req, res) {
    console.log("Post Brewer", res)
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    db.Brewer.create({

      BreweryName: req.body.breweryname,
      address: req.body.streetaddress,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zipcode,
      phone: req.body.phonenumber,
      email: req.body.emailaddress,
      description: 'Its good',
      hours: req.body.hours,
      password: hash
     
    }).then(function (dbModel) {
      res.json(dbModel);
      console.log("POSTED", dbModel)
    })
    .catch(err => console.log(err))
  },

  findAll: function (req, res) {
    console.log("Get Saved", res)
    db.Brewer.findAll({}).then(dbModel => {

      console.log("MODEL", dbModel)
      return res.json(dbModel);
    });
  },

  findById: function (req, res) {
    // console.log(req.params)
    db.Brewer.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  delete: function (req, res) {
    db.Brewer
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findOne: function (req, res) {
    console.log("req" + JSON.stringify(req.body));
    db.Brewer.findOne({ where: { email: req.body.user } })
      .then(dbModel => {
        if (bcrypt.compare(req.body.password, dbModel.password)) {
          db.Brewer.update({ loggedIn: true }, { where: { id: dbModel.id } })
            .then(result => db.Brewer.findOne({ where: { id: dbModel.id } })
              .then(user => res.json(user)))
        }
      })
      .catch(err => res.status(422).json(err))
  },

  logout: function (req, res) {
    db.Brewer.update({ loggedIn: false }, { where: { id: req.body.id } })
      .then(dbModel => res.json(dbModel))
  }
};
