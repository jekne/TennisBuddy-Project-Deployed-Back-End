"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("sets", [
      {
        matchId: 1,
        set: 1,
        //I am bring back the user id
        userId: 3,
        score: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        matchId: 1,
        set: 1,
        userId: 4,
        score: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        matchId: 1,
        set: 2,
        userId: 3,
        score: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        matchId: 1,
        set: 2,
        userId: 4,
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, //
      //
      {
        matchId: 1,
        set: 3,
        userId: 3,
        score: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        matchId: 1,
        set: 3,
        userId: 4,
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //
      {
        matchId: 2,
        set: 1,
        userId: 3,
        score: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        matchId: 2,
        set: 1,
        userId: 4,
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        matchId: 2,
        set: 2,
        userId: 3,
        score: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        matchId: 2,
        set: 2,
        userId: 4,
        score: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, //
      // {
      //   matchId: 3,
      //   set: 1,
      //   // userId: 6,
      //   score: 3,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   matchId: 3,
      //   set: 1,
      //   // userId: 9,
      //   score: 6,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   matchId: 3,
      //   set: 2,
      //   // userId: 6,
      //   score: 5,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   matchId: 3,
      //   set: 2,
      //   // userId: 9,
      //   score: 7,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
    ]);
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
    await queryInterface.bulkDelete("sets", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
