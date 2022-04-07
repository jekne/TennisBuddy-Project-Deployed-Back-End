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

//GET ALL THE USER MATCHES
// http -v GET :4000/usermatches

router.get("/", async (req, res, next) => {
  try {
    const userMatches = await UserMatches.findAll();
    if (!userMatches) {
      res.status(404).send("Something went wrong!");
    } else {
      res
        .status(200)
        .send({ message: "All the userMatches!!!", userMatches: userMatches });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//ANOTHER ONE
//http -v GET :4000/usermatches/all
router.get("/all", async (req, res, next) => {
  try {
    // const id = parseInt(req.params.id);
    // console.log("id", id);
    const AllMatches = await UserMatches.findAll({
      // where: { matchId: id },
      include: { model: User, attributes: ["imageUrl", "name"] },
    });

    // const whoPlayedThatMatch = await User.findByPk(id, {
    // where: { matchId: id },
    // include: { model: Match, where: { winnerId: id }, include: Sets },
    // include: { model: Match, attributes: ["winnerId", "name"] },
    // });
    if (!AllMatches) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({
        message: "User Matches by the matchId!!!",
        AllMatches: AllMatches,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//GET MACTHES BY ID, WHO PLAYED THAT SPECIFIC MATCH
//http -v GET :4000/usermatches/1
router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("id", id);
    const whoPlayedThatMatch = await UserMatches.findAll({
      where: { matchId: id },
      include: { model: User, attributes: ["imageUrl", "name"] },
    });

    // const whoPlayedThatMatch = await User.findByPk(id, {
    // where: { matchId: id },
    // include: { model: Match, where: { winnerId: id }, include: Sets },
    // include: { model: Match, attributes: ["winnerId", "name"] },
    // });
    if (!whoPlayedThatMatch) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({
        message: "User Matches by the matchId!!!",
        whoPlayedThatMatch: whoPlayedThatMatch,
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
/////////////////////

//FIND TROUGH THE ID OF THE PERSON WHO IS LOGGED IN WITCH MATCH HE PLAYED
//http -v GET :4000/usermatches/allmatches/1
router.get("/allmatches/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("id", id);
    const whoPlayedThatMatch = await UserMatches.findAll({
      where: { userId: id },
      include: { model: User, attributes: ["name"] },
    });

    // const whoPlayedThatMatch = await User.findByPk(id, {
    // where: { matchId: id },
    // include: { model: Match, where: { winnerId: id }, include: Sets },
    // include: { model: Match, attributes: ["winnerId", "name"] },
    // });
    if (!whoPlayedThatMatch) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({
        message: "User Matches by the matchId!!!",
        whoPlayedThatMatch: whoPlayedThatMatch,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

///////
// FIND TROUGH THE ID OF THE PERSON WHO IS LOGGED IN WITCH MATCH HE PLAYED

//GET MACTHES BY ID, WHO PLAYED THAT SPECIFIC MATCH // now i have the endpoint with the matchid
//http -v GET :4000/usermatches/new/1
router.get("/new/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    console.log("id", userId);
    const findThematchesPlayed = await UserMatches.findByPk(userId);

    if (!findThematchesPlayed) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({
        message: "The user played this match!!!",
        findThematchesPlayed: findThematchesPlayed,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
