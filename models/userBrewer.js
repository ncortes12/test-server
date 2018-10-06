"use strict";

module.exports = (sequelize, DataTypes) => {
  var UserBrewer = sequelize.define("UserBrewer"/*, {
		BrewerId: DataTypes.INTEGER,
		UserId: DataTypes.INTEGER
	}*/);

	UserBrewer.associate= (models) => {
		UserBrewer.belongsTo(models.Users, {
			as: 'User',
			onDelete: "cascade"			 
		}),

		UserBrewer.belongsTo(models.Brewer, {
			as: 'Brewer',
			onDelete: "cascade"
		})
	}

	return UserBrewer;
}


