import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LogSignUpModal';
import Splash from '../Splash/Splash';
import './Navigation.css';
import { getTokenFromResponse } from '../Splash/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Home from '../Home/Home';
import { useDataLayerValue } from '../../DataLayer/DataLayer';
import SplashPage from '../SplashPage/SplashPage';
import { Route, Redirect } from 'react-router-dom';

{/* <ProfileButton user={sessionUser} /> */}

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
      spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then(spotifyuser => {
        dispatch( {
          type: 'SET_SPOTIFY_USER',
          spotifyuser: spotifyuser
        });
      });

    //   spotify.getMyTopArtists().then((response) =>
    //   dispatch({
    //     type: "SET_TOP_ARTISTS",
    //     top_artists: response,
    //   })
    // );

    // dispatch({
    //   type: "SET_SPOTIFY",
    //   spotify: spotify,
    // });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist('37i9dQZEVXcLaymYeKGb6o').then((response) =>
         dispatch({
           type: "SET_DISCOVER_WEEKLY",
           discover_weekly: response,
         })
        );
    }
  }, [token, dispatch]);
//run code based on a given condition
console.log("-------", spotifyuser);
console.log("******", token);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      { token ? (
        <>
        <Route>
          <Redirect to="/bets" spotify={spotify} />
        </Route>
        </>
      ) : (
      <>
      <Splash exact={true} />
      </>
      )
      }
      </>
    );
  } else {
    sessionLinks = (
      <>
      <SplashPage path="/" exact={true} />
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
