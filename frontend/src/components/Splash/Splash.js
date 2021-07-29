import React from 'react'
import './Splash.css'
import { spotifyUrl } from './spotify';

function Splash() {
    return (
        <div className="splash">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="" />
        <a href={spotifyUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Splash;
