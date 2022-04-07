'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feedBack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  feedBack.init({
    reviwerId: DataTypes.INTEGER,
    reviwedId: DataTypes.INTEGER,
    feedBack: DataTypes.TEXT,
    level: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'feedBack',
  });
  return feedBack;
};