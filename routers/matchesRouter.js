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

//GET ALL THE MATCHES
// http -v GET :4000/matches

router.get("/", async (req, res, next) => {
  try {
    const matches = await Match.findAll();
    if (!matches) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({ message: "All the Matches!!!", matches: matches });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//GET MACTHES BY ID, I AM HAVING THE WINNER OF THE MATCH
//http -v GET :4000/matches/4

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("id", id);
    // const user = await Match.findOne({ where: { winnerId: id } });
    // console.log("hat is this user", user);
    const matchesWinner = await Match.findOne({ where: { winnerId: id } });
    if (!matchesWinner) {
      res.status(200).send("This player do not won a match yet!");
    } else {
      res.status(200).send({
        message: "Matches by id!!!",
        matchesWinner: matchesWinner,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});
module.exports = router;
