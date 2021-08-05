import React, { useEffect, useState } from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import { useDataLayerValue } from '../../DataLayer/DataLayer';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


function Footer( { spotify } ) {
    //     const [{ token, item, playing }, dispatch] = useDataLayerValue();

//   useEffect(() => {
//     spotify.getMyCurrentPlaybackState().then((r) => {
//       console.log(r);

//       dispatch({
//         type: "SET_PLAYING",
//         playing: r.is_playing,
//       });

//       dispatch({
//         type: "SET_ITEM",
//         item: r.item,
//       });
//     });
//   }, [spotify]);

//   const handlePlayPause = () => {
//     if (playing) {
//       spotify.pause();
//       dispatch({
//         type: "SET_PLAYING",
//         playing: false,
//       });
//     } else {
//       spotify.play();
//       dispatch({
//         type: "SET_PLAYING",
//         playing: true,
//       });
//     }
//   };

//   const skipNext = () => {
//     spotify.skipToNext();
//     spotify.getMyCurrentPlayingTrack().then((r) => {
//       dispatch({
//         type: "SET_ITEM",
//         item: r.item,
//       });
//       dispatch({
//         type: "SET_PLAYING",
//         playing: true,
//       });
//     });
//   };

//   const skipPrevious = () => {
//     spotify.skipToPrevious();
//     spotify.getMyCurrentPlayingTrack().then((r) => {
//       dispatch({
//         type: "SET_ITEM",
//         item: r.item,
//       });
//       dispatch({
//         type: "SET_PLAYING",
//         playing: true,
//       });
//     });
//   };
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                className="footer__albumLogo"
                src="https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/603820afd31232aab368ea6f_New%20Red-logo-emblem.png"
                // src={item?.album.images[0].url}
                // alt={item?.name}
                alt=""/>
                {/* { item ? (
                    <div className="footer__songInfo">
                        <h4>{item.name}</h4>
                        <p>{item.artists.map((artist) => artis.name).join(", ")}</p>
                     </div>
                ) : (
                    <div className="footer__songInfo">
                        <h4>No song is playing</h4>
                        <p>...</p>
                    </div>
                )} */}
                <div className="footer__songInfo">
                    <h4>Sportify Project</h4>
                    <p>Matt Mores</p>
                </div>
            </div>
            <div className="footer__center">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matthewmores/" style={{ color: "inherit", textDecoration: 'inherit'}}>
                <LinkedInIcon className="footer__green" />
                </a>
                {/* <SkipPreviousIcon className="footer__icon" /> */}
                {/* onClick={skipNext}  */}
                {/* {playing ? (
                <PauseCircleOutlineIcon
                    onClick={handlePlayPause}
                    fontSize="large"
                    className="footer__icon"
                    />
                ) : (
                <PlayCircleOutlineIcon
                    onClick={handlePlayPause}
                    fontSize="large"
                    className="footer__icon"
                    />
                )} */}
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/MattMores/Sportify" style={{ color: "inherit", textDecoration: 'inherit'}}>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                </a>
                {/* <SkipNextIcon className="footer__icon" /> */}
                {/* onClick={skipPrevious} */}
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/MattMores" style={{ color: "inherit", textDecoration: 'inherit'}}>
                <GitHubIcon className="footer__green" />
                </a>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    {/* <Grid item>
                         <PlaylistPlayIcon />
                    </Grid> */}
                    {/* <Grid item>
                        <VolumeDownIcon />
                    </Grid> */}
                    {/* <Grid item xs>
                        <Slider/>
                    </Grid> */}
                </Grid>
            </div>
        </div>
    )
}

export default Footer
