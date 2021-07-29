import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import Splash from '../Splash/Splash';
import './Navigation.css';
import { getTokenFromResponse } from '../Splash/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Home from '../Home/Home';
import { useDataLayerValue } from '../../DataLayer/DataLayer';

const spotify = new SpotifyWebApi();

//source: https://www.npmjs.com/package/spotify-web-api-js

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [{spotifyuser, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(spotifyuser => {
        dispatch( {
          type: 'SET_SPOTIFY_USER',
          spotifyuser: spotifyuser
        })
      })
    }
  }, []);
//run code based on a given condition
console.log("-------", spotifyuser);
console.log("******", token);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <NavLink exact to="/">Home</NavLink>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
      { token ? (
        <>
        <Home spotify={spotify} />
        </>
      ) : (
      <>
      <Splash path="/" exact={true} />
      <LoginFormModal />
      <NavLink to="/signup">Sign Up</NavLink>
      </>
      )
      }
      </>
    );
  }

  return (
    <ul>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
