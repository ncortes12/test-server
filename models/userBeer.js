"use strict";

module.exports = (sequelize, DataTypes) => {
  var UserBeer = sequelize.define("UserBeer"/*, {
		BrewerId: DataTypes.INTEGER,
		UserId: DataTypes.INTEGER
	}*/);

	UserBeer.associate= (models) => {
		UserBeer.belongsTo(models.Users, {
			as: 'User',
			onDelete: "cascade"
		}),

		UserBeer.belongsTo(models.Beer, {
			as: 'Beer',
			onDelete: "cascade"
		})
	}

	return UserBeer;
}


