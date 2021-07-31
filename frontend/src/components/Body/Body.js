import React from 'react'
import "./Body.css"
import Header from '../Header.js/Header'
import { useDataLayerValue } from '../../DataLayer/DataLayer'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../SongRow/SongRow';

function Body( { spotify }) {
    const [{ discover_weekly }, dispatch ] = useDataLayerValue();

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:0jZc9KmCnD8evywM006qgi`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
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
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

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
                    <h2>Discover Weekly</h2>
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
                    {/* List of songs */}
                    {discover_weekly?.tracks.items.map( (item) => (
                        <SongRow playSong={playSong} track={item.track} />
                        ))}
                </div>
        </div>
    )
}

export default Body;
