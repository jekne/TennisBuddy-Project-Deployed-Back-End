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

//GET ALL THE LOCATIONS
//http -v GET :4000/locations

router.get("/", async (req, res, next) => {
  try {
    const locations = await Location.findAll();
    if (!locations) {
      res.status(404).send("Something went wrong!");
    } else {
      res
        .status(200)
        .send({ message: "All the locations!!!", locations: locations });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
