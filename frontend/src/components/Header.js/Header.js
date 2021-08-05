import React, { useState, useEffect } from 'react';
import "./Header.css"
import { useSelector } from 'react-redux';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from '../../DataLayer/DataLayer';
import ProfileButton from '../Navigation/ProfileButton';
import { getAllBets, betCreate, deleteBet } from "../../store/bets";


function Header() {
    const sessionUser = useSelector(state => state.session.user);
    console.log("99999666666", sessionUser)
    const [ { spotifyuser, token}, dispatch] = useDataLayerValue();


    return (
        <div className="header">
            <div className="header__left">
            <SearchIcon />
            <input
                placeholder="Search for teams to bet on"
                type="text"
            />
            </div>
            <div className="header__right">
                <Avatar src={spotifyuser?.images[0]?.url} alt={spotifyuser?.display_name} />
                {/* <h4>Matt Mores</h4> */}
                { token ? (<h4>{spotifyuser?.display_name}</h4>) : (<h4>{sessionUser.username}</h4>)}
                <ProfileButton user={sessionUser} />
            </div>
        </div>
    )
}

export default Header;
