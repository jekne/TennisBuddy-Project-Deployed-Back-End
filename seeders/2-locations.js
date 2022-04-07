"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "locations",
      [
        {
          city: "Amsterdam - City Center",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amsterdam - Oost",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amsterdam - Zuid",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amsterdam - Noord",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amsterdam - West",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amsterdam - Boos en Lommer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amsterdam - Bijlmeer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Amstelveen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
    await queryInterface.bulkDelete("locations", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
