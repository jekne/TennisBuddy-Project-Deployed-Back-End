const express = require("express");

const cors = require("cors");
// Auth middleware: our own code. Checks for the existence of a token in a header called `authentication`.
const authMiddleWare = require("./auth/middleware");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const clubRouter = require("./routers/clubsRouter");
const levelRouter = require("./routers/levelRouter");
const userRouter = require("./routers/userRouter");
const matchesRouter = require("./routers/matchesRouter");
const setsRouter = require("./routers/setsRouter");
const usermatchesRouter = require("./routers/userMatchesRouter");
const storiesRouter = require("./routers/storiesRouter");
const locationsRouter = require("./routers/locationRouter");
const chatRouter = require("./routers/chatRouter");

// Create an express app
const app = express();
app.use(cors());

/**
 * Middlewares
 *
 * It is advisable to configure your middleware before configuring the routes
 * If you configure routes before the middleware, these routes will not use them
 *
 */

// CORS middleware:  * Since our api is hosted on a different domain than our client
// we are are doing "Cross Origin Resource Sharing" (cors)
// Cross origin resource sharing is disabled by express by default

// express.json():be able to read request bodies of JSON requests a.k.a. body-parser
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

/**
 * Routes
 *
 * Define your routes and attach our routers here (now that middlewares are configured)
 */

app.use("/auth", authRouter);
app.use("/clubs", clubRouter);
app.use("/levels", levelRouter);
app.use("/users", userRouter);
app.use("/matches", matchesRouter);
app.use("/sets", setsRouter);
app.use("/usermatches", usermatchesRouter);
app.use("/stories", storiesRouter);
app.use("/locations", locationsRouter);
app.use("/chats", chatRouter);

// POST endpoint which requires a token for testing purposes, can be removed
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  // accessing user that was added to req by the auth middleware
  const user = req.user;
  // don't send back the password hash
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
