"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "levels",
      [
        {
          levelRateFixed: "1.0",
          checkLevel: false,
          description:
            "A person with a tennis rating of 1.0 is essentially new to tennis and first stepping out onto the court.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelRateFixed: "1.5",
          checkLevel: false,
          description:
            "A person with a tennis rating of 1.5 has limited experience on the court and their main goal is trying to keep the ball in play. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelRateFixed: "2.0",
          checkLevel: false,
          description:
            "A tennis rating of a 2.0 indicates the person knows how to use all the different strokes but continues to lack experience. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelRateFixed: "2.5",
          checkLevel: false,
          description:
            "A person with a 2.5 tennis rating is beginning to learn where the ball is headed and sustain a short rally but unable to cover the court efficiently.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelRateFixed: "3.0",
          checkLevel: false,
          description:
            "A tennis rating of a 3.0 can hit medium paced shots but lacks confidence and execution with power and control of the shots. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelRateFixed: "3.5",
          checkLevel: false,
          description:
            "A person with a 3.5 tennis rating still lacks depth and variety with shots but has improved on direction of shots as well as improved court coverage. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelRateFixed: "4.0",
          checkLevel: false,
          description:
            "A person with a tennis rating of a 4.0 will force errors and sometimes become impatient but able to complete dependable shots with control and depth. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelRateFixed: "4.5",
          checkLevel: false,
          description:
            "A tennis rating of 4.5 indicates the person is starting to understand and execute the power and spin shots while maintaining pace of the game. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelRateFixed: "5.0",
          checkLevel: false,
          description:
            "A person with a 5.0 tennis rating has learned good shot anticipation and can consistently hit different strokes with depth and control. At this level the person can also hit winners and force errors by the opponent. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelRateFixed: "5.5",
          checkLevel: false,
          description:
            "A tennis rating of a 5.5 has developed powerful shots and can vary styles of shots and perform dependable shots under stress. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelRateFixed: "6.0",
          checkLevel: false,
          description:
            "A person with a 6.0 tennis rating has had intense training and usually has additional ranking outside the traditional tennis rankings. Most players with a tennis rating of 6.0 or above have sectional or national ratings. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelRateFixed: "6.5",
          checkLevel: false,
          description:
            "A tennis rating of 6.5 means the person has experience has extensive satellite tournament play and good potential of becoming a 7.0. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelRateFixed: "7.0",
          checkLevel: true,
          description:
            "A tennis rating of a 7.0 indicates the player plays professionally at tournament and makes a living from tournament prize money. While it may take time to move from one tennis rating to another it is important to make sure to use proper body mechanics to reduce the risk of injury setting a player back. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("levels", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
