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
import { getAllBets, betCreate, deleteBet } from "../../store/bets";
import { Grid, lighten } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import SongRowFake from '../SongRowFake/SongRowFake';
import TextField from '@material-ui/core/TextField';


function Body( { spotify }) {
    const [{ discover_weekly, spotifyuser, token }, _dispatch ] = useDataLayerValue();
    const history = useHistory();
    const [betTeam, setBetTeam] = useState("");
    const [opposingTeam, setOpposingTeam] = useState("");
    const [betType, setBetType] = useState("Straight");
    const [line, setLine] = useState("");
    const [amount, setAmount] = useState("");
    const [reason, setReason] = useState("");
    const dispatch = useDispatch();
    let allBets = useSelector(state => Object.values(state.bets));
    const userId = useSelector(state => state.session.user?.id);
    const [search, setSearch] = useState("");
    const [errors, setErrors] = useState("");

    const searchFeature = () => {
        return allBets.filter((bet) =>
        bet.betTeam.toLowerCase().includes(search.toLowerCase())
        );
    }

    allBets = searchFeature();

    // const playPlaylist = (id) => {
    //     spotify
    //       .play({
    //         context_uri: `spotify:playlist:0jZc9KmCnD8evywM006qgi`,
    //       })
    //       .then((res) => {
    //         spotify.getMyCurrentPlayingTrack().then((r) => {
    //           _dispatch({
    //             type: "SET_ITEM",
    //             item: r.item,
    //           });
    //           _dispatch({
    //             type: "SET_PLAYING",
    //             playing: true,
    //           });
    //         });
    //       });
    //   };

      // const playSong = (id) => {
      //   spotify
      //     .play({
      //       uris: [`spotify:track:${id}`],
      //     })
      //     .then((res) => {
      //       spotify.getMyCurrentPlayingTrack().then((r) => {
      //         _dispatch({
      //           type: "SET_ITEM",
      //           item: r.item,
      //         });
      //         _dispatch({
      //           type: "SET_PLAYING",
      //           playing: true,
      //         });
      //       });
      //     });
      // };

      useEffect(() => {
        dispatch(getAllBets());
      }, [dispatch]);

      const handleSubmit = (e) => {
        e.preventDefault();
        if (betTeam && opposingTeam && line && amount && reason && betType) {
            setErrors("")
            setBetTeam("")
            setOpposingTeam("")
            setBetType("Straight")
            setLine("")
            setAmount("")
            setReason("")
          const newBet = {userId, betTeam, opposingTeam, betType, line, amount, reason }
          let createdBet = dispatch(betCreate(newBet))
          // dispatch(getAllBets())
          if (createdBet) {
            history.push('/bets')
        }
        } else {
         setErrors("All fields must be filled")
        }
      }

      //array.sort date.parse b - date.parse a (a and b are 1st and second argument passed into .sort)

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                {/* <img src="https://thumb.spokesman.com/GsJALbsxruDIAgPJdGdubb-x00I=/2500x0/media.spokesman.com/photos/2020/07/15/5f0dee5554d81.hires.jpg" alt=""/> */}
                { token ? (<img src={spotifyuser?.images[0]?.url} alt=""/>) : (
                <img
                // src={spotifyuser?.images[0]?.url}
                src="https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png"
                // src={discover_weekly?.images[0].url}
                alt=""
                />
                )}
                <div className="body__infoText">
                    <strong>BETLIST</strong>
                    <h2>Discover Bets Weekly</h2>
                {/* <p>description...</p> */}
                    {/* <p>{discover_weekly?.description}</p> */}
                    <p>Your weekly mixtape of fresh bets. Enjoy new bets and deep cuts selected by your friends. Create, post and update your own bets. And be sure to comment and rate the bets of your friends.</p>
                </div>
                </div>
                <div className="body__songs">
                {/* <div className="body__icons">
                    <PlayCircleFilledIcon
                    className="body__shuffle"
                    onClick={playPlaylist}/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div> */}
                  <div className="body__info">
                    {/* <tr key={bet.id}></tr> */}
                    <form action="">
                    <div className="error__bets">
                        {/* {errors.map((error, idx) => <div key={idx}>{error}</div>)} */}
                        <div>{errors}</div>
                      </div>
                      <Grid container spacing={2}>
                      <Grid item>
                        <input value={betTeam} onChange={e => setBetTeam(e.target.value)} type = "text" className="input" placeholder="Team #1"/>
                      </Grid>
                      <Grid item>
                        <input value={amount} onChange={e => {if (isNaN(Number(e.target.value))){
                          setErrors("Input must be a Number")
                          return
                        }
                          else {
                            setErrors("")
                            setAmount(e.target.value)
                          }
                        }} type = "text" className="input" placeholder="$$ Amount $$"/>
                      </Grid>
                      <Grid item>
                        <input value={line} onChange={e => {if (isNaN(Number(e.target.value))){
                          setErrors("Line and Amount must be a Number")
                          return
                        }
                          else {
                            setErrors("")
                            setLine(e.target.value)
                          }
                        }} type = "text" className="input" placeholder="Line"/>
                      </Grid>
                        <Grid item>
                        <input value={opposingTeam} onChange={e => setOpposingTeam(e.target.value)} className="input" type="text" placeholder="Team #2"/>
                        </Grid>
                        <Grid item>
                        <input value={reason} onChange={e => setReason(e.target.value)} className="input" type="text" placeholder="Reason"/>
                        </Grid>
                        <Grid item>
                        <select value={betType} onChange={e => setBetType (e.target.value)} className="input">
                          <option disabled>Bet Type</option>
                          <option value="Straight">Straight</option>
                          <option value="Spread">Spread</option>
                          <option value="Over">Over</option>
                          <option value="Under">Under</option>
                          <option value="Parlay">Parlay</option>
                        </select>
                        </Grid>
                        <Grid item>
                          <button onClick={handleSubmit} type="submit" className="auth-btn_">Add Bet</button>
                        </Grid>
                      </Grid>
                    </form>
                </div>
                <div className="header__left">
                     <SearchIcon />
                      <input
                          id="searchBets"
                          placeholder="Search For Teams To Bet On..."
                          type="search"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="input-5"
                      />
                </div>
                    {/* List of songs */}
                    {/* {discover_weekly?.tracks.items.map( (item) => (
                        <SongRow playSong={playSong} track={item.track} />
                        ))} */}
                        {/* array.sort.map here */}
                    {allBets && allBets.map( (bet) => (
                        <SongRow key={bet.id} bet={bet} />
                        ))}
                </div>
                <br></br>
                <br></br>
                <br></br>
                {/* <SongRowFake/> */}
        </div>
    )
}

export default Body;
