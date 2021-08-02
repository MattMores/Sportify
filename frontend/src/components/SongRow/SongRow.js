import React from 'react'
import './SongRow.css'
import { Grid } from "@material-ui/core";
import { getAllBets,deleteBet } from "../../store/bets";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


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
    const handleDelete = (id) => {
        dispatch(deleteBet(id))
    }

    return (
        <div className="songRow">
            <img className="songRow__album" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNPTaZg8bHVoBAhrIgdvUgAm8RCArXFLPSQ&usqp=CAU" alt=""/>
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
                {bet.userId === id ? <button className="btn">Update Bet</button> : null}
                </Grid>
                <Grid item>
                {bet.userId === id ? <button onClick={() => handleDelete(bet.id)} className="btn">Delete Bet</button> : null}
                </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default SongRow
