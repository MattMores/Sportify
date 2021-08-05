import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useDataLayerValue } from '../../DataLayer/DataLayer';
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from '../Splash/spotify';
import { Avatar } from "@material-ui/core";

const spotify = new SpotifyWebApi();

function ProfileButton({ user }) {
  const _dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [{spotifyuser, token}, dispatch] = useDataLayerValue();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    _dispatch(sessionActions.logout());
    spotify.setAccessToken(null);
  };

  return (
    <>
      <button className="nav-btn-profile" onClick={openMenu}>
      <i className="fas fa-sign-in-alt" />
      </button>
      {showMenu && (
        <div>
          {/* <li className="userDrop-1">User: {user.username}</li>
          <br></br>
          <li className="userDrop">Email: {user.email}</li>
          <li> */}
            <button className="logout-btn" onClick={logout}>Log Out</button>
          {/* </li> */}
        </div>
      )}
    </>
  );
}

export default ProfileButton;
