const db = require("../models");

module.exports = {
  addFavBrewery: function(req, res) {
    console.log(req.body);
    db.UserBrewer.create(req.body).then(dbModel => {
      console.log("FAV", dbModel);
    })
    .catch(err => console.log(err))
  },

  getFavBrewery: function (req, res) {
    //   console.log("GET FAV", res);
    db.Brewer.findAll({}).then(dbUBModel => {
        let breweries = [];
       for (var i = 0; i < dbUBModel.length; i++) {
        breweries.push({
            id: dbUBModel[i].id,
            BreweryName: dbUBModel[i].BreweryName
        })

       }
       console.log("BREWERS", breweries);
    })
    
    // db.Brewer.findById(dbUBModel[1].BrewerId).then(brewer => {
    //     console.log("Brewer", brewer)
    // })
    // .catch(err => console.log(err))

  }

};
