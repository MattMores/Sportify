import React from 'react'
import './Splash.css'
import { spotifyUrl } from './spotify';
import { NavLink } from 'react-router-dom'

function Splash() {
    return (
        <>
        <div className="splash">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="" />
        <div>
            <div className="container-splash">
            <a className="spotify_btn" href={spotifyUrl}>LOGIN WITH SPOTIFY</a>
            <NavLink className="btn-splash" to='/bets' exact={true} activeClassName='active'>
                Click Here To Skip
            </NavLink>
            </div>
        </div>
        </div>
        </>
    )
}

export default Splash;
