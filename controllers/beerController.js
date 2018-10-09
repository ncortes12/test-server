const db = require("../models");

module.exports = {

	create: function(req, res) {
    console.log("Post Beer", req)
    
    db.Beer.create({
		 beerName: req.body.beerName,
		 BrewerId:req.body.brewerId,
		 IBU: req.body.ibu,
		 ABV: req.body.abv,
		 tastingNotes:req.body.tastingNotes
       }).then(function(dbModel) {
      res.json(dbModel);
      console.log("Beer POSTED", dbModel)
  });
	},
	
	findAll: function(req, res) {
    // console.log("Get Saved", res)
    db.Beer.findAll({}).then(dbModel =>{

      console.log("Beer", dbModel)
      return res.json(dbModel);
   });
	},
	
	findById: function(req, res) {  
    console.log(req)
    db.Beer
      .findAll({where:{BrewerId:req.body.id}})
      .then(dbModel => 
        {console.log(JSON.stringify(dbModel))
          // return res.json(dbModel)
     })
      .catch(err => res.status(422).json(err));
	},
	
	delete: function(req, res) {
    db.Beer
    .destroy({
      where: {
        id: req.params.id
      }  
    })    
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
}