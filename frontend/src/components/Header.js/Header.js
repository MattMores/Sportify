import React, { useState, useEffect } from 'react';
import "./Header.css"
import { useSelector } from 'react-redux';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from '../../DataLayer/DataLayer';
import ProfileButton from '../Navigation/ProfileButton';
import { getAllBets, betCreate, deleteBet } from "../../store/bets";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(3),
      },
    },
    small: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));


function Header() {
    const classes = useStyles();
    const sessionUser = useSelector(state => state.session.user);
    const [ { spotifyuser, token}, dispatch] = useDataLayerValue();


    return (
            <>
            <div className="header__right">
                <Avatar className={classes.small} src={spotifyuser?.images[0]?.url} alt={spotifyuser?.display_name} />
                {/* <h4>Matt Mores</h4> */}
                { token ? (<h4 className="user_info_h4">{spotifyuser?.display_name}</h4>) : (<h4 className="user_info_h4">{sessionUser.username}</h4>)}
                <ProfileButton user={sessionUser} />
            </div>
            </>
    )
}

export default Header;
