const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const { Bet, Review, User } = require('../../db/models');

// get one review

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.id, {
        include: [Bet, User]
    })
    res.json(review)
}))

// create a review

router.post('/', asyncHandler(async (req, res) => {
    // let { userId, betTeam, opposingTeam, betType, line, amount, reason } = req.body;
    const reviewInfo = req.body;
    console.log("----------------------------", reviewInfo)
    const review = await Review.create(reviewInfo)
    console.log("6666666", res.json(review))
      // console.log("--------------------", userId, title, content); //notebookId
    //   const bet = await Bet.create({
    //     userId,
    //     betTeam,
    //     opposingTeam,
    //     betType,
    //     line,
    //     amount,
    //     reason
    //   });
      res.json(review);
    }));

// Update review


router.put('/', asyncHandler(async (req, res) => {
    const { id, betId, name, rating, answer } = req.body;
    console.log("revvviewwwwwwwstoreupdate", req.body)
    const review = await Review.findByPk(id);
    await review.update( {name, rating, answer })
    res.json(review)
}))

// router.delete('/', restoreUser, asyncHandler(async (req, res) => {
//     const { id } = req.body;
//     console.log("----------------------", id)
//     const bet = await Bet.findByPk(id);
//     await bet.destroy();
//     res.json(bet);
//     })
// );

// router.delete('/:betId', restoreUser, asyncHandler(async (req, res) => {
//     const betId = req.params.betId;
//     const deletedBet = await Bet.destroy( {where: {betId} });
//     res.json(deletedBet)
//     })
// );

module.exports = router;
