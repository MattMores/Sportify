const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const { Bet, Review, User } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
    const bets = await Bet.findAll( {include: [Review, User]});
    console.log("wwwwwwwwwwww", bets);
    res.json(bets)
}))

module.exports = router;
