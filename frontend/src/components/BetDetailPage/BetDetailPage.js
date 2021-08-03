import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBets } from "../../store/bets";
import StarRating from '../StarRating/StarRating';
import Reviews from '../Reviews/Reviews';
import { Grid } from '@material-ui/core';
import AddReview from '../AddReview/AddReview';

function BetDetailPage() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const currentBet = useSelector(state => state.bets[id])
    console.log("888888888", currentBet?.Reviews)


    useEffect(() => {
        dispatch(getAllBets());
    }, [dispatch])

    return (
       <>
        Now Showing post {currentBet?.betTeam}
        <h1>{currentBet?.User?.username}</h1>
                <p>
                    ${currentBet?.amount}: {currentBet?.betTeam} +{currentBet?.line} ({currentBet?.betType}) vs. {currentBet?.opposingTeam}
                </p>
                <p>
                    Reason: {currentBet?.reason}
                </p>
                <div> <StarRating newValue={4}/> </div>
       <div>
           {currentBet && currentBet?.Reviews.map( (review) => (
               <Reviews key={review.id} review={review}/>
           ))}
            {/* {currentBet.betTeam.Reviews.answer} */}
        </div>
        <Grid container spacing={4}>
            <Grid item>
                {/* <Reviews /> */}
            </Grid>
            <Grid item>
                {/* <Reviews /> */}
            </Grid>
            <Grid item>
                {/* <Reviews /> */}
            </Grid>
        </Grid>
        <div>
        <AddReview betId={currentBet.id} />
        </div>
        </>
    )
}

export default BetDetailPage
