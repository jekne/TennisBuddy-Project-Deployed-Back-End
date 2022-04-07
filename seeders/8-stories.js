"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("stories", [
      {
        content: "Hey rafa lets play?",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpIFlFJmbFkMs-hsuMSdec7AEy9Rd_1ON4Q&usqp=CAU",
        email: "r@r.com",
        userId: 4,
        name: "Roger Federer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "you never beat me!",
        imageUrl:
          "https://cdn-japantimes.com/wp-content/uploads/2022/02/np_file_143928.jpeg",
        email: "rafa@rafa.com",
        name: "Rafael Nadal",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
