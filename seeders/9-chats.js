"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("chats", [
      {
        conversation: "Hey rafa lets play?",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpIFlFJmbFkMs-hsuMSdec7AEy9Rd_1ON4Q&usqp=CAU",
        email: "r@r.com",
        userIdSender: 4,
        userIdReceiver: 3,
        name: "Roger Federer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conversation: "Yes! when?",
        imageUrl:
          "https://cdn-japantimes.com/wp-content/uploads/2022/02/np_file_143928.jpeg",
        email: "rafa@rafa.com",
        name: "Rafael Nadal",
        userIdSender: 3,
        userIdReceiver: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conversation: "can you play at 15:00?",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpIFlFJmbFkMs-hsuMSdec7AEy9Rd_1ON4Q&usqp=CAU",
        email: "r@r.com",
        userIdSender: 4,
        userIdReceiver: 3,
        name: "Roger Federer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conversation: "Yes!See you there! Be prepared!",
        imageUrl:
          "https://cdn-japantimes.com/wp-content/uploads/2022/02/np_file_143928.jpeg",
        email: "rafa@rafa.com",
        name: "Rafael Nadal",
        userIdSender: 3,
        userIdReceiver: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
    await queryInterface.bulkDelete("chats", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
