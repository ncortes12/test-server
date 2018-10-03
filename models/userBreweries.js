"use strict";

module.exports = function(sequelize, DataTypes) {

    var userBreweries = sequelize.define("userBreweries",
    {
    BrewerId:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    UserId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

    });

    return userBreweries;

}