import React from 'react'
import './SongRow.css'
import { Grid } from "@material-ui/core";
import { deleteBet } from "../../store/bets";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UpdatePageModal from '../UpdatePage/UpdatePage';
import StarRating from '../StarRating/StarRating';
import songrowlogo_cropped from "./songrowlogo_cropped.png"


// function SongRow( {track, playSong}) {
//     return (
//         <div className="songRow" onClick={() => playSong(track.id)}>
//             <img className="songRow__album" src={track.album.images[0].url} alt=""/>
//             <div className="songRow__info">
//                 <h1>{track.name}</h1>
//                 <p>
//                     {track.artists.map((artist) => artist.name).join(", ")} -{" "}
//                     {track.album.name}
//                 </p>
//             </div>

//         </div>
//     )
// }

function SongRow( {bet} ) {

    const { id } = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    // const renderRating = (bet) => {
    //     if (!bet.count) {
    //         return <span>0 Reviews</span>
    //     }
    //     return (
    //         <>
    //         <StarRating rating={bet.id} />
    //         <span>({bet.count})</span>
    //         </>
    //     )
    // }
    // const handleUpdate = (id) => {
    //     history.push(`/bets/${id}/update`)
    // }
    const handleDelete = (id) => {
        // e.stopPropagation()
        dispatch(deleteBet(id))
    }

    const handleBetSelect = (id) => {
        history.push(`/bets/${id}`)
    }

    // useEffect(() => {
    // }, [dispatch]);
    // onClick={() => handleBetSelect(bet.id)}
    return (
        <div className="songRow">
            <img className="songRow__album" src={songrowlogo_cropped} alt=""/>
            <div className="songRow__info">
                <h1>{bet?.User?.username}</h1>
                <p>
                    ${bet.amount}: {bet.betTeam} +{bet.line} ({bet.betType}) vs. {bet.opposingTeam}
                </p>
                <p>
                    Reason: {bet.reason}
                </p>
                <Grid container spacing={2}>
                <Grid item>
                {/* {bet.userId === id ? <button onClick={() => handleBetSelect(bet.id)} className="btn">Comment</button> : null} */}
                <button onClick={() => handleBetSelect(bet.id)} className="auth-btn_row">Comment</button>
                </Grid>
                <Grid item>
                {/* {bet.userId === id ? <button onClick={() => handleUpdate(bet.id)} className="btn">Update Bet</button> : null} */}
                {bet?.userId === id ? <UpdatePageModal bet= {bet} /> : null}
                </Grid>
                <Grid item>
                {bet?.userId === id ? <button onClick={() => handleDelete(bet?.id)} className="auth-btn_row">Delete Bet</button> : null}
                </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default SongRow
