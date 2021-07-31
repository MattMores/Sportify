'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
      userId: 1,
      betId: 1,
      name: "Bobby",
      rating: 10,
      answer: "Love this bet. I'm definetly tailing this",
    },
    {
      userId: 1,
      betId: 2,
      name: "Bobby",
      rating: 2,
      answer: "Bet with your brain not your heart",
    },
    {
      userId: 4,
      betId: 3,
      name: "Matt",
      rating: 9,
      answer: "Yup. Same page. Sandoval has been trash",
    },
    {
      userId: 4,
      betId: 4,
      name: "Matt",
      rating: 7,
      answer: "Agree with the logic, but Sunday Night Baseball has historically gone under",
    },
  ], {});
},

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
