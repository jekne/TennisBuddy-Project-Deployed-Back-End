const { Router } = require("express");
const router = new Router();
const User = require("../models/").user;
const Club = require("../models/").club;
const Level = require("../models").level;
const Match = require("../models").match;
const Sets = require("../models").set;
const Location = require("../models").location;
const UserMatches = require("../models").userMatches;
const Chats = require("../models").chat;
const authMiddleware = require("../auth/middleware");

//GET ALL THE CHATS
//http -v GET :4000/chats

router.get("/", async (req, res, next) => {
  try {
    const chats = await Chats.findAll();
    if (!chats) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({ message: "All the chats!!!", chats: chats });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//GET CHATS BY ID SENDER
//http -v GET :4000/chats/sender/3

router.get("/sender/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log(id);

    const chatsSender = await Chats.findAll({ where: { userIdSender: id } });
    if (!chatsSender) {
      res.status(404).send("Something went wrong!");
    } else {
      res
        .status(200)
        .send({ message: "All the chatsSender!!!", chatsSender: chatsSender });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//GET CHATS BY ID RECEIVER
//http -v GET :4000/chats/receiver/3

router.get("/receiver/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log(id);

    const chatsReceiver = await Chats.findAll({
      where: { userIdReceiver: id },
    });
    if (!chatsReceiver) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({
        message: "All the chatsReceiver!!!",
        chatsReceiver: chatsReceiver,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
