import React from 'react'
import { Grid } from "@material-ui/core";


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

function SongRowFake ( ) {
    // useEffect(() => {
    // }, [dispatch]);
    // onClick={() => handleBetSelect(bet.id)}
    return (
        <div className="songRow">
            <img className="songRow__album" src="" alt=""/>
            <div className="songRow__info">
                <h1></h1>
                <p>
                </p>
                <p>
                </p>
                <Grid container spacing={2}>
                <Grid item>
                {/* {bet.userId === id ? <button onClick={() => handleBetSelect(bet.id)} className="btn">Comment</button> : null} */}
                <button className="btn">Comment</button>
                </Grid>
                <Grid item>
                {/* {bet.userId === id ? <button onClick={() => handleUpdate(bet.id)} className="btn">Update Bet</button> : null} */}
                </Grid>
                <Grid item>
                </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default SongRowFake
