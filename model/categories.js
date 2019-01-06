const Sequelize = require('sequelize');
const sequelize = require('../dbConnection');
const categories = sequelize.define('categories',{
	id: {
		type : Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey : true
	},
	name:{
		type : Sequelize.STRING
	}
});

module.exports = categories;