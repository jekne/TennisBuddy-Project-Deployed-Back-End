"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userMatches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userMatches.belongsTo(models.user);
      userMatches.belongsTo(models.match);
      // define association here
      // userMatches.belongsTo(models.match, { foreignKey: "matchId" });
    }
  }
  userMatches.init(
    {
      userId: DataTypes.INTEGER,
      matchId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userMatches",
    }
  );
  return userMatches;
};
