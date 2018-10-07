const db = require("../models");
const bcrypt = require('bcryptjs');

// Defining methods for the brewersController
module.exports = {

  create: function (req, res) {
    // console.log("Post Brewer", res)
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("Password", salt);
    db.Brewer.create({
      BreweryName: "Thunder Canyon",
      address: '220 E. Broadway',
      city: 'tucson',
      state: 'az',
      zip: '85701',
      phone: '(520) 396-3480',
      email: 'ThunderCanyonBreweryRestaurant&Pub@gmail.com',
      description: 'Its good',
      hours: '12-10',
      password: hash,
      // loggedIn: 'false',
      // UsersId: 1
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
    db.Brewer.update({ loggedIn: false }, { where: { id: "1" } })
      .then(dbModel => res.json(dbModel))
  }
};
