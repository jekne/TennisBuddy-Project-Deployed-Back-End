"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  club.init(
    {
      name: DataTypes.STRING,
      webSite: DataTypes.STRING,
      telephone: DataTypes.STRING,
      email: DataTypes.STRING,
      adress: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      rateClub: DataTypes.INTEGER,

      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "club",
    }
  );
  return club;
};
