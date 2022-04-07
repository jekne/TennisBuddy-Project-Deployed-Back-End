"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      level.hasMany(models.user);
      // define association here
    }
  }
  level.init(
    {
      levelRateFixed: DataTypes.STRING,
      description: DataTypes.TEXT,
      checkLevel: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "level",
    }
  );
  return level;
};
