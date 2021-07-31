import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useDataLayerValue } from '../../DataLayer/DataLayer';
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from '../Splash/spotify';

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
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
