'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bets', [
      {
      userId: 4,
      betTeam: "White Sox",
      opposingTeam: "Cubs",
      betType: "Straight",
      line: 155,
      amount: 1000,
      reason: "White Sox are 28-2 in their last 30 against left handed starters."
    },
    {
      userId: 4,
      betTeam: "Cardinals",
      opposingTeam: "Brewers",
      betType: "Straight",
      line: 110,
      amount: 500,
      reason: "Brewers Suck"
    },
    {
      userId: 1,
      betTeam: "As",
      opposingTeam: "Angels",
      betType: "Straight",
      line: -120,
      amount: 500,
      reason: "Sandoval has a 6.52 career ERA against the As. As are 6-1 vs. the As this season."
    },
    {
      userId: 1,
      betTeam: "Nationals",
      opposingTeam: "Phillies",
      betType: "Over 7.5",
      line: -110,
      amount: 200,
      reason: "Both starting pitchers have struggled of late. Nats have went over in 4 straight."
    },
  ], {});
},

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bets', null, {});
  }
};
