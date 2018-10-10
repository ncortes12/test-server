const db = require("../models");


module.exports = {
  addFavBrewery: function(req, res) {
    console.log("REQ.BODY", req.body.BrewerId);
    db.UserBrewer.findOrCreate({
      where: {
        UserId: req.body.UserId,
        BrewerId: req.body.BrewerId
      }
    }).then(dbModel => {
      console.log("FAV", dbModel);
    })
    .catch(err => console.log(err))
  },

  deleteFavBeer: function (req, res) {
    db.UserBrewer
      .destroy({
        where: {
          Userid: req.params.id,
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getFavBrewery: function (req, res) {
      console.log("GET FAV", req);
    db.UserBrewer.findAll({
        where: {
            UserId: req.params.id
        }
    }).then(data => {
        // console.log("BREWERS", dbUBModel);
        let favBreweriesIdArr = [];
       for (var i = 0; i < data.length; i++) {
         console.log("LOOP", data[i].BrewerId);
        favBreweriesIdArr.push(data[i].BrewerId)
       }
       db.Brewer.findAll({
         where: {id: favBreweriesIdArr}
       }).then(data => {
        //  console.log("DATA", data);
         favBreweriesArr = [];
         for (var i = 0; i<data.length; i++){
          //  console.log("Loop", data[i].dataValues)
           favBreweriesArr.push(data[i].dataValues);
         }
         console.log("FavBreweriesArr", favBreweriesArr)
         res.json(favBreweriesArr);
       })
    })  
  },

  addFavBeer: function(req, res) {
    console.log("REQ.BODY", req.body);
    db.UserBeer.findOrCreate({
      where: {
        UserId: req.body.UserId,
        BeerId: req.body.BeerId
      }
    }).then(dbModel => {
      console.log("FAV", dbModel);
    })
    .catch(err => console.log(err))
  },

  getFavBeer: function (req, res) {
    console.log("GET FAV", req.params.id);
  db.UserBeer.findAll({
      where: {
          UserId: req.params.id
      }
  }).then(data => {
      // console.log("BREWERS", data);
      let favBeerIdArr = [];
     for (var i = 0; i < data.length; i++) {
       console.log("LOOP", data[i].BeerId);
      favBeerIdArr.push(data[i].BeerId)
     }
     db.Beer.findAll({
       where: {id: favBeerIdArr}
     }).then(data => {
      //  console.log("DATA", data);
      favBeersArr = [];
       for (var i = 0; i<data.length; i++){
        //  console.log("Loop", data[i].dataValues)
        favBeersArr.push(data[i].dataValues);
       }
       console.log("FavBreweriesArr", favBeersArr)
       res.json(favBeersArr);
     })
  })  
}
};

