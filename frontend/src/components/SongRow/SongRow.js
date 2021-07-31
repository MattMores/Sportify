import React from 'react'
import './SongRow.css'

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

function SongRow( {bet}) {
    return (
        <div className="songRow">
            <img className="songRow__album" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNPTaZg8bHVoBAhrIgdvUgAm8RCArXFLPSQ&usqp=CAU" alt=""/>
            <div className="songRow__info">
                <h1>{bet.User.username}</h1>
                <p>
                    ${bet.amount}: {bet.betTeam} +{bet.line} ({bet.betType}) vs. {bet.opposingTeam}
                </p>
                <p>
                    Reason: {bet.reason}
                </p>
            </div>

        </div>
    )
}

export default SongRow
