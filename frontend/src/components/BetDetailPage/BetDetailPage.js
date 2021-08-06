import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { betCreate, getAllBets } from "../../store/bets";
import StarRating from '../StarRating/StarRating';
import Reviews from '../Reviews/Reviews';
import { Grid } from '@material-ui/core';
import AddReview from '../AddReview/AddReview';
import "./BetDetailPage.css"
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

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
        <div className="body">
        Now Showing post {currentBet?.betTeam}
        <h1>{currentBet?.User?.username}</h1>
                <p>
                    ${currentBet?.amount}: {currentBet?.betTeam} +{currentBet?.line} ({currentBet?.betType}) vs. {currentBet?.opposingTeam}
                </p>
                <p>
                    Reason: {currentBet?.reason}
                </p>
                <div className="body__info_">
                <Grid
                container spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                {/* <div> <StarRating newValue={4}/> </div> */}
                {/* <StarRating rating={betCreate.average_rating} />
                <span>
                    {bet.count ? `(${bet.count})` : "(0)"}
                </span> */}
           {currentBet?.Reviews && currentBet?.Reviews.map( (review) => (
               <Reviews key={review.id} review={review}/>
           ))}
            {/* {currentBet.betTeam.Reviews.answer} */}
            </Grid>
        </div>
        <AddReview betId={currentBet?.id} />
        </div>
        <Footer />
        </>
    )
}

export default BetDetailPage
