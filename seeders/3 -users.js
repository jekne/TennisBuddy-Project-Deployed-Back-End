"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Serena Willians",
          email: "serena@serena.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-jOTxYCLezEDOXiQtV4SCSQ59lhuWXUXng&usqp=CAU",
          gender: false,
          age: 40,
          telephone: "3198289",
          locationId: 3,
          levelId: 13,
          description: "hey lets play tennis!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maria Sharapova",
          email: "sharapova@Sharapova.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://tennishead.net/wp-content/uploads/2020/08/Maria-Sharapova-celebrating.jpg.webp",
          gender: false,
          age: 34,
          telephone: "3198289",
          locationId: 5,
          levelId: 13,
          description: "Waiting for a match!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Roger Federer",
          email: "r@r.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpIFlFJmbFkMs-hsuMSdec7AEy9Rd_1ON4Q&usqp=CAU",
          gender: true,
          age: 40,
          telephone: "35890204",
          locationId: 1,
          levelId: 13,
          description: "Always willing to play!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rafael Nadal",
          email: "rafa@rafa.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://cdn-japantimes.com/wp-content/uploads/2022/02/np_file_143928.jpeg",
          gender: true,
          age: 35,
          telephone: "35890204",
          locationId: 8,
          levelId: 12,
          description: "Looking for a regular player!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andy Murray",
          email: "andy@andy.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://www.insidesport.in/wp-content/uploads/2022/02/Andy-Murray.jpg?w=1024&h=1&crop=1",

          gender: true,
          age: 34,
          telephone: "35890204",
          locationId: 4,
          levelId: 13,
          description: "I want play every morning!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Novak Djokovic",
          email: "novak@novak.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://www.ad.nl/tennis/djokovic-door-naar-kwartfinales-in-dubai-behoud-van-koppositie-op-atp-ranking-blijft-in-zicht~af2977b9/213059346/",

          gender: true,
          age: 34,
          telephone: "35890204",
          locationId: 3,
          levelId: 4,
          description: "I like to play during the night!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stefanos Tsitsipas",
          email: "stefanos@stefanos.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://www.tennisworldusa.org/imgb/113270/stefanos-tsitsipas-reacts-to-surviving-laslo-djere-challenge-in-tight-acapulco-opener.jpg",

          gender: true,
          age: 23,
          telephone: "35890204",
          locationId: 2,
          levelId: 11,
          description: "We always can find a time to play!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Daniil Medvedev",
          email: "medvedev@medvedev.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://tennishead.net/wp-content/uploads/2022/02/Medvedev-number-one.jpeg",

          gender: true,
          age: 26,
          telephone: "35890204",
          locationId: 1,
          levelId: 9,
          description: "During the weekends i am always on the court!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andrey Rublev",
          email: "andrey@andrey.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://prod-accessonline-be.s3-us-west-2.amazonaws.com/uploads/2022/02/AndreyRublev022822.jpg",

          gender: true,
          age: 24,
          telephone: "35890204",
          locationId: 5,
          description: "Lets Hit this afternon!",
          levelId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dominic Thiem",
          email: "dominic@dominic.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://image-cdn.essentiallysports.com/wp-content/uploads/20210210153717/2021-02-08T055434Z_1695155671_UP1EH280GEY10_RTRMADP_3_TENNIS-AUSOPEN.jpg?width=900",
          gender: true,
          age: 28,
          telephone: "35890204",
          locationId: 1,
          levelId: 7,
          description:
            "Clubs or free courts, choose your favorite place and i will be there!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
