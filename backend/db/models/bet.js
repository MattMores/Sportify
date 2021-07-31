'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bet = sequelize.define('Bet', {
    userId: DataTypes.INTEGER,
    betTeam: DataTypes.STRING,
    opposingTeam: DataTypes.STRING,
    betType: DataTypes.STRING,
    line: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    reason: DataTypes.STRING
  }, {});
  Bet.associate = function(models) {
    Bet.belongsTo(models.User, { foreignKey: 'userId'});
    Bet.hasMany(models.Review, { foreignKey: 'betId'});
  };
  return Bet;
};
