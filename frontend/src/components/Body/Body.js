import React from 'react'
import "./Body.css"
import Header from '../Header.js/Header'
import { useDataLayerValue } from '../../DataLayer/DataLayer'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../SongRow/SongRow';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBets } from "../../store/bets";
import { Grid } from "@material-ui/core";

function Body( { spotify }) {
    const [{ discover_weekly }, _dispatch ] = useDataLayerValue();
    const [betTeam, setBetTeam] = useState("");
    const [opposingTeam, setOpposingTeam] = useState("");
    const [betType, setBetType] = useState("");
    const [line, setLine] = useState("");
    const [amount, setAmount] = useState("");
    const [reason, setReason] = useState("");
    const dispatch = useDispatch();
    const allBets = useSelector(state => Object.values(state.bets));

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:0jZc9KmCnD8evywM006qgi`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              _dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              _dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              _dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              _dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

      useEffect(() => {
        dispatch(getAllBets());
      }, [dispatch]);

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                {/* <img src="https://thumb.spokesman.com/GsJALbsxruDIAgPJdGdubb-x00I=/2500x0/media.spokesman.com/photos/2020/07/15/5f0dee5554d81.hires.jpg" alt=""/> */}
                <img
                src={discover_weekly?.images[0].url}
                alt=""
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Picks Weekly</h2>
                {/* <p>description...</p> */}
                    <p>{discover_weekly?.description}</p>
                </div>
                </div>
                <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                    className="body__shuffle"
                    onClick={playPlaylist}/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>
                  <div className="body__info">
                    {/* <tr key={bet.id}></tr> */}
                    <form action="">
                      <Grid container spacing={2}>
                      <Grid item>
                        <input type = "text" className="input" placeholder="$$ Amount $$"/>
                      </Grid>
                      <Grid item>
                        <input type = "text" className="input" placeholder="Team #1"/>
                      </Grid>
                      <Grid item>
                        <input type = "text" className="input" placeholder="Line"/>
                      </Grid>
                      <Grid item>
                        <select className="input">
                          <option disabled>Bet Type</option>
                          <option value="Straight">Straight</option>
                          <option value="Spread">Spread</option>
                          <option value="Over">Over</option>
                          <option value="Under">Under</option>
                          <option value="Parlay">Parlay</option>
                        </select>
                        </Grid>
                        <Grid item>
                        <input className="input" type="text" placeholder="Team #2"/>
                        </Grid>
                        <Grid item>
                        <input className="input" type="text" placeholder="Reason"/>
                        </Grid>
                        <Grid item>
                          <button className="auth-btn">Add Bet</button>
                        </Grid>
                      </Grid>
                    </form>
                </div>
                    {/* List of songs */}
                    {/* {discover_weekly?.tracks.items.map( (item) => (
                        <SongRow playSong={playSong} track={item.track} />
                        ))} */}
                    {allBets && allBets.map( (bet) => (
                        <SongRow bet={bet} />
                        ))}
                </div>
        </div>
    )
}

export default Body;
