"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      match.belongsToMany(models.user, {
        through: "userMatches",
        foreignKey: "matchId",
      });
      match.hasMany(models.set);
      // define association here
      // match.belongsTo(models.userMatches, {
      //   foreignKey: "matchId",
      // }); //
    }
  }
  match.init(
    {
      winnerId: DataTypes.INTEGER,
      date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "match",
    }
  );
  return match;
};
