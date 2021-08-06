const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const { Bet, Review, User } = require('../../db/models');

// get all bets
router.get('/', asyncHandler(async (req, res) => {
    const bets = await Bet.findAll( {include: [Review, User]});
    console.log("wwwwwwwwwwww", bets);
    res.json(bets)
    // bets.length
    //bets.rows
}))

// get one bet

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const bet = await Bet.findByPk(req.params.id, {
        include: [Review, User]
    })
    res.json(bet)
}))

// create a bet

router.post('/', asyncHandler(async (req, res) => {
    const betInfo = req.body;
    const bet = await Bet.create(betInfo)
      res.json(bet);
    }));

// router.post('/:id(\\d+)', asyncHandler(async (req, res) => {
//     let { userId, betTeam, opposingTeam, betType, line, amount, reason } = req.body;
//     const reviewInfo = req.body;
//     console.log("rrrrrrrrrrrrrrr", reviewInfo)
//     const review = await Review.create(ReviewInfo)
//     console.log("555555555555", res.json(review))
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
    //     res.json(review);
    // }));

// Update Bet

// router.put('/', asyncHandler(async (req, res) => {
//     // console.log("----------------------------", req.body)
//     let { id, userId, betTeam, opposingTeam, betType, line, amount, reason } = req.body; //notebookId
//       // console.log("--------------------", id, title, content, notebookId, userId); //notebookId
//       userId = Number(userId)
//       const bet = await Bet.findByPk(id) //notebookId
//       // console.log("------------------", note)
//       // if (title === note.dataValues.title && content !== note.dataValues.content) { // unreadable object before you res.json
//       //   return note
//       // } else {
//           await bet.update({...bet.dataValues, betTeam, opposingTeam, betType, line, amount, reason})
//           res.json(bet)
//       // };
//     }));

router.put('/', asyncHandler(async (req, res) => {
    const { id, betTeam, opposingTeam, betType, line, amount, reason } = req.body;
    console.log("updatttttteeeeeddddstore", req.body)
    const bet = await Bet.findByPk(id);
    await bet.update({betTeam, opposingTeam, betType, line, amount, reason })
    res.json(bet)
}))

router.delete('/', restoreUser, asyncHandler(async (req, res) => {
    const { id } = req.body;
    console.log("----------------------", id)
    const bet = await Bet.findByPk(id);
    await bet.destroy();
    res.json(bet);
    })
);

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
