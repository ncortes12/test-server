const db = require("../models");
const bcrypt = require("bcryptjs");




module.exports = {
  create: function (req, res) {
    console.log("req" + JSON.stringify(req.body));
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var user = {
      firstName: req.body.fname,
      lastName: req.body.lname,
      email: req.body.emailaddress,
      phone: req.body.phonenumber,
      password: hash
    }

    db.Users.create(user).then(function (dbModel) {
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

  //   db.Users.create(user).then(function (dbModel) {
  //     res.json(dbModel)
  //   });
  // },

  fetchMe(req, res) {
  const username = req.decoded.data;
  return models.Users
  .find({
    include: [{
      model: models.Groups,
      as: 'groups',
      required: false,
      attributes: ['id', 'name'],
      through: { attributes: [] }
    }],
    where: { username }
  })},

  delete: function (req, res) {
    db.Users.destroy({
      where: { id: req.params.id }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findOne: function (req, res) {
    console.log("req" + JSON.stringify(req.body));
    db.Users.findOne({ where: { email: req.body.user } })
      .then(dbModel => {
        if (bcrypt.compare(req.body.password, dbModel.password)) {
          db.Users.update({ loggedIn: true }, { where: { id: dbModel.id } })
            .then(result => db.Users.findOne({ where: { id: dbModel.id } })
              .then(user => {
                res.json(user)
                console.log("user object: " + JSON.stringify(user))
              }

              ))
        }

      })
      .catch(err => res.status(422).json(err))
  },

  logout: function (req, res) {
    db.Users.update({ loggedIn: false }, { where: { id: "1" } })
      .then(dbModel => res.json(dbModel))
  },


};
