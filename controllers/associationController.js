const db = require("../models");


module.exports = {
  addFavBrewery: function(req, res) {
    console.log("REQ.BODY", req.body);
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

  getFavBrewery: function (req, res) {
      console.log("GET FAV", req.params.id);
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
        // getBrewery(data[i].BrewerId);
        // db.Brewer.findById(data[i].BrewerId).then(brewer => {
        //   // console.log("brewerId", brewer.dataValues);
        //   favBreweriesIdArr.push(brewer.dataValues)
        //   console.log("FAV ARRAY", favBreweriesIdArr)
        //   return favBreweriesIdArr
        // })
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
    
  }
};

// function getBrewery (id) {

//   db.Brewer.findById(id).then(brewer => {
//     console.log("brewerId", brewer);

// //   var brewerArr = [];
// //   for (var i = 0; i < brewer.length; i++) {
// //     console.log("BREWER Loop", brewer[i])
// //     var id = brewer[i].id;
// //     var BreweryName = brewer[i].BreweryName;
// //     brewerArr.push({
// //       id: id,
// //       BreweryName: BreweryName
// //     });
// //   }
// //   console.log("BrewerArr", brewerArr)
// // })
// // .catch(err => console.log(err))
//   })
// }