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
       <div className="body__info_betTitle">
        <div className="body__infoText_">
        <div className="betDetailContainer">
        <h1 className="betDetailHeader">{currentBet?.User?.username}</h1>
                <p className="betDetailDescription">
                    Bet: ${currentBet?.amount}: {currentBet?.betTeam} +{currentBet?.line} ({currentBet?.betType}) vs. {currentBet?.opposingTeam}
                </p>
                <p className="betDetailDescription">
                    Reason: {currentBet?.reason}
                </p>
                </div>
                </div>
                </div>
                <div className="body__info_">
                <Grid container spacing={2}>
                    {currentBet?.Reviews && currentBet?.Reviews.map( (review) => (
                        <Reviews key={review.id} review={review}/>
                            ))}
                </Grid>
                <br></br>
        </div>
        <AddReview betId={currentBet?.id} />
        </div>
        <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <Footer />
        </>
    )
}

export default BetDetailPage
