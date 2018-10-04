const db = require("../models");


module.exports = {
    addFavBrewery: function (req, res) {
    db.User.findById(1).then(function(user){
        user.addBrewer()
    })
    
          
     
    },



}