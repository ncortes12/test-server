const db = require("../models");
const bcrypt = require('bcryptjs');

// Defining methods for the brewersController
module.exports = {

  create: function (req, res) {
    console.log("Post Brewer", res)
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var brewer = {
      BreweryName: "Hop Shop",
      address: '456 e University st',
      city: 'tucson',
      state: 'az',
      zip: '85740',
      phone: '888-222-3455',
      email: 'n@n.com',
      description: 'HOWWEEELLLL',
      hours: '9-5',
      password: hash,
      loggedIn: 'false',
     
    }
    // var brewer = {
    //   BreweryName: req.body.breweryname,
    //   address: req.body.streetaddress,
    //   city: req.body.city,
    //   state: req.body.state,
    //   zip: req.body.zipcode,
    //   phone: req.body.phonenumber,
    //   email: req.body.emailaddress,
    //   hours: req.body.hours,
    //   password: hash,
    //   loggedIn: 'false',

    // }
    db.Brewer.create(brewer).then(function (dbModel) {
      res.json(dbModel);
      console.log("POSTED", dbModel)
    });
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
    db.Brewer.findOne({ where: { email: 'n@n.com' } })
      .then(dbModel => {
        if (bcrypt.compare("Password", dbModel.password)) {
          db.Brewer.update({ loggedIn: true }, { where: { id: dbModel.id } })
            .then(result => db.Brewer.findOne({ where: { id: result } })
              .then(user => res.json(user)))

        }
      })
  },

  logout: function (req, res) {
    db.Brewer.update({ loggedIn: false }, { where: { id: "1" } })
      .then(dbModel => res.json(dbModel))
  }
};
