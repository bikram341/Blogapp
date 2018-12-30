const Sequelize = require("sequelize");
const sequelize = require("../dbConnection");
const Posts = sequelize.define("posts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: { type: Sequelize.STRING },
  body: {
    type: Sequelize.STRING
  }
});
module.exports = Posts;