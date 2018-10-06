"use strict";

module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define("Users", {

		id: {
			type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		
			// validate: {
			// 	notEmpty: true
			// }
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			// validate: {
			// 	notEmpty: true
			// }
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
			// validate: {
			// 	// min: 12,
			// 	not: ["[a-z]", 'i']
			// }
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			// validate: {
			// 	min: 8,
			// }
		},
		loggedIn: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},

	});

	// Users.associate = function (models) {
	// 	// Users.belongsToMany(models.Brewer, {
	// 	// 	through: "UserBrewer",
	// 	// 	as: 'brewers',
	// 	// 	// onDelete: "cascade",
	// 	// 	// foreignKey: 'USERSID'
	// 	// })
	// 	Users.hasMany(models.Brewer,{
	// 		as: 'Brewer'
	// 	})
	// 	Users.hasMany(models.Beer,{
	// 		as: 'Beer'
	// 	})
	// }


	return Users;
};