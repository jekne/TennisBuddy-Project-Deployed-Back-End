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
//GET ALL THE LEVELS
//http -v GET :4000/levels

router.get("/", async (req, res, next) => {
  try {
    const levels = await Level.findAll();
    if (!levels) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({ message: "All the levels!!!", levels: levels });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//UPDATE THE LEVEL

//http PUT :4000/levels/update/11 levelId=11

router.put("/update/:id/:levelId", async (req, res, next) => {
  try {
    // HERE WE GET OUT THE ID OF THE USER THAT MADE THE TOKEN
    // const logged_in_user = req.user.id;

    // console.log("THIS IS THE LOGGED_IN_USER", logged_in_user);
    // const user = await User.findByPk(logged_in_user);

    // if (!user) {
    //   res.status(404).send("The user was not found");
    // } else {
    //   res.status(200).send({ message: "authorized", user: user });

    const id = parseInt(req.params.id);
    console.log("id", id);
    // console.log("this is the body!!", req.body);

    const levelId = parseInt(req.params.levelId);
    console.log("level ID", levelId);

    console.log("levelId", levelId);
    const users = await User.findByPk(id);
    // console.log("users found", users);

    if (!users) {
      res.status(404).send(`The id provided ${id}, was not founded`);
    }

    const updateUser = await users.update({
      levelId: levelId,
    });

    res.status(200).send({
      message: `This is the User correspondent a id ${id},  His level was update`,
      updateUser: updateUser,
    });
  } catch (e) {
    console.log(e);
  }
  next();
});

module.exports = router;
