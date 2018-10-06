"use strict";

module.exports = function(sequelize, DataTypes) {
  var Beer = sequelize.define("Beer", {
    beerName: DataTypes.STRING,
    // brewer: DataTypes.STRING,
    IBU: DataTypes.STRING,
    ABV: DataTypes.STRING,
    tastingNotes: DataTypes.STRING
  });

  Beer.associate = models => {
    Beer.belongsTo(models.Brewer,{
      as: 'Brewer'
    })
  }

  return Beer;
};

