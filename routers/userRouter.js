const { Router } = require("express");
const router = new Router();
const User = require("../models/").user;
const Club = require("../models/").club;
const Level = require("../models").level;
const Match = require("../models").match;
const Sets = require("../models").set;
const Location = require("../models").location;
const UserMatches = require("../models").userMatches;
const authMiddleware = require("../auth/middleware");

//GET ALL THE USERS INCLUDING LEVEL
//http -v GET :4000/users

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [{ model: Location }, { model: Level }],
    });
    if (!users) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({ message: "All the users!!!", users: users });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//GET ALL THE USERS INCLUDING LOCATION
//http -v GET :4000/users/location

router.get("/location", async (req, res, next) => {
  try {
    const usersLocation = await User.findAll({
      include: {
        model: Location,
      },
    });
    if (!usersLocation) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({
        message: "All the usersLocation!!!",
        usersLocation: usersLocation,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//GET USERS BY ID
//http -v GET :4000/users/4

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("id", id);

    const userById = await User.findByPk(id, {
      include: {
        model: Match,
        include: Sets,
      },
      // include: { model: Sets },
      // include: { model: UserMatches },
    });
    if (!userById) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({
        message: "All the users with matches and Sets!!!",
        userById: userById,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});
//  include: {
// model: Match,
// attributes: ["winnerId", "date"],
//UPDATE USER

//http PUT :4000/users/update/1  name=johann,password=1234,age=34,description=good,email=joj,gender=true,imageUrl=mnice,levelId=7,location=amsterdam,telephone=302

router.put("/update/:id", authMiddleware, async (req, res, next) => {
  try {
    // HERE WE GET OUT THE ID OF THE USER THAT MADE THE TOKEN
    const logged_in_user = req.user.id;

    console.log("THIS IS THE LOGGED_IN_USER", logged_in_user);
    const user = await User.findByPk(logged_in_user);

    if (!user) {
      res.status(404).send("The user was not found");
    } else {
      res.status(200).send({ message: "authorized", user: user });

      const id = parseInt(req.params.id);
      console.log("id", id);
      const {
        name,
        age,
        description,
        email,
        gender,
        imageUrl,
        levelId,
        location,
        telephone,
        password,
      } = req.body;

      console.log("this is the body!!", req.body);
      const users = await User.findByPk(id);
      // console.log("users found", users);

      if (!users) {
        res.status(404).send(`The id provided ${id}, was not founded`);
      }

      await users.update({
        name: !name ? users.name : name,
        age: !age ? users.age : age,
        description: !description ? users.description : description,
        email: !email ? users.email : email,
        gender: gender,
        imageUrl: !imageUrl ? users.imageUrl : imageUrl,
        password: !password ? users.password : password,
        telephone: !telephone ? users.telephone : telephone,
        locationId: !location ? users.location : location,
      });

      res.status(200).send({
        message: `This is the User correspondent a id ${id},  was update`,
        updateUser: users,
      });
    }
  } catch (e) {
    console.log(e);
  }
  next();
});

//GET  THE USERS  BY ID INCLUDING LEVEL AND LOCATION
//http -v GET :4000/users/details/3

router.get("/details/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("id", id);
    const users = await User.findByPk(id, {
      include: [{ model: Location }, { model: Level }],
    });
    if (!users) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({
        message: "Users by id with level and location!!!",
        users: users,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
