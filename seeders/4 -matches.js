"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "matches",
      [
        {
          winnerId: 3,
          date: "2022-03-03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          winnerId: 3,
          date: "2022-03-03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   winnerId: 9,
        //   date: "2022-04-03",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   winnerId: 7,
        //   date: "2022-04-04",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   winnerId: 8,
        //   date: "2022-04-03",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   winnerId: 10,
        //   date: "2022-07-02",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   winnerId: 4,
        //   date: "2022-07-02",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   winnerId: 9,
        //   date: "2022-07-02",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   winnerId: 5,
        //   date: "2022-07-02",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   winnerId: 3,
        //   date: "2022-01-02",
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
    await queryInterface.bulkDelete("matches", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
