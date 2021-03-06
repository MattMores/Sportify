const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const betsRouter = require('./bets.js');
const reviewsRouter = require('./reviews.js');
// const apiRouter = require('/api', apiRouter);

// GET /api/set-token-cookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'DemoUser'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// // GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

router.use("/bets", betsRouter);

router.use("/reviews", reviewsRouter);

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

// router.use("/api", apiRouter);

//api/v1/restaurants - GET all restraurants
//api/v1/restaurants/:id - GET one restaurant
//api/v1/restaurants - POST/Create restaurant
//api/v1/restaurants/:id PUT- Update Restaurant
//api/v1/restaurants/:id - DELETE Restaurant

module.exports = router;
