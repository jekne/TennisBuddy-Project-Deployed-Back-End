const { Router } = require("express");
const router = new Router();
const User = require("../models/").user;
const Club = require("../models/").club;

//GET ALL THE CLUBS
//http -v GET :4000/clubs

router.get("/", async (req, res, next) => {
  try {
    const clubs = await Club.findAll();
    if (!clubs) {
      res.status(404).send("Something went wrong!");
    } else {
      res.status(200).send({ message: "All the clubs!!!", clubs: clubs });
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
