const db = require("../models");


module.exports ={
 addFavBrewery: function(req,res){
    db.userBreweries.create({
        BrewerId:2,
        UserId: 1
    })
    .then(function(dbModel){
        res.json(dbModel)
    })
 },

 getFavBrewery: function(req,res){
     db.userBreweries.findAll({where:{userId:1}})
     .then(function(dbModel){
         res.json(dbModel)
     })
 }

}