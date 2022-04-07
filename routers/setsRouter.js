const { Router } = require("express");
const router = new Router();
const User = require("../models/").user;
const Club = require("../models/").club;
const Level = require("../models").level;
const Match = require("../models").match;
const Sets = require("../models").set;
const Location = require("../models").location;
const UserMatches = require("../models").userMatche;
const authMiddleware = require("../auth/middleware");

//GET ALL THE SETS
// http -v GET :4000/sets

router.get("/", async (req, res, next) => {
  try {
    const sets = await Sets.findAll();
    if (!sets) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({ message: "All the sets!!!", sets: sets });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//GET SET  BY ID OF THE PLAYER, WHO PLAYED THAT SPECIFIC MATCH
//http -v GET :4000/sets/1
router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    console.log("id", id);

    const SetByMatchId = await Sets.findAll({
      where: { matchId: id },
      include: { model: User, attributes: ["name", "imageUrl"] },
      // include: { model: Match, attributes: ["winnerId", "date"] },
    });

    if (!SetByMatchId) {
      res.status(404).send("Something went wrong!");
    } else {
      const matchSets = {};
      SetByMatchId.forEach(
        (matchSet) => (matchSets[matchSet.dataValues.set] = []) // prefill the keys for every set
      ); // [{setId:?}, {setId:?},]

      SetByMatchId.forEach(
        (matchSet) =>
          (matchSets[matchSet.dataValues.set] = [
            ...matchSets[matchSet.dataValues.set],
            matchSet.dataValues,
          ]) // add myself to the array under the right key
      );
      // console.log("sets", matchSets);
      // console.log("set by match id", SetByMatchId.dataValues);
      res.status(200).send({
        message: `The sets played in the match id ${id}!!!`,
        SetByMatchId: matchSets,
      });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
