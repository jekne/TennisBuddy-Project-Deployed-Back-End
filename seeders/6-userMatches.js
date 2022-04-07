"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userMatches",
      [
        {
          userId: 3,
          matchId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          matchId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          matchId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          matchId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   userId: 8,
        //   matchId: 5,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   userId: 10,
        //   matchId: 6,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   userId: 4,
        //   matchId: 7,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   userId: 9,
        //   matchId: 8,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   userId: 5,
        //   matchId: 9,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   userId: 3,
        //   matchId: 10,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
  },
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
   */

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userMatches", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
