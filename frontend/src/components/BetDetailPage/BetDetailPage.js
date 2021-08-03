import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBets } from "../../store/bets";
import StarRating from '../StarRating/StarRating';
import Reviews from '../Reviews/Reviews';
import { Grid } from '@material-ui/core';

function BetDetailPage() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const currentBet = useSelector(state => state.bets[id])

    useEffect(() => {
        dispatch(getAllBets());
    }, [dispatch])

    return (
       <>
       <div>
            Now Showing post {currentBet.betTeam}
        </div>
        <div>
        <StarRating newValue={4}/>
        </div>
        <Grid container spacing={4}>
            <Grid item>
                <Reviews />
            </Grid>
            <Grid item>
                <Reviews />
            </Grid>
            <Grid item>
                <Reviews />
            </Grid>
        </Grid>
        </>
    )
}

export default BetDetailPage
