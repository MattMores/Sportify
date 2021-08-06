import React from 'react'
import "./Sidebar.css"
import SidebarOption from '../SidebarOption/SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../DataLayer/DataLayer';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import cropped_full_green from'../../assets/cropped_full_green.png'
import sidebarLogo from "./sidebarLogo.png"

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue()

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={cropped_full_green} alt="" />
        <NavLink to="/bets" exact={true} style={{ color: "inherit", textDecoration: 'inherit'}}>
            <SidebarOption Icon={HomeIcon} title="Home"/>
        </NavLink>
        {/* <a target="_blank" rel="noopener noreferrer" href="https://github.com/MattMores" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption Icon={GitHubIcon} title="GitHub Profile" />
        </a> */}
        <a target="_blank" rel="noopener noreferrer" href="https://developer.spotify.com/" style={{ color: "inherit", textDecoration: 'inherit'}}>
            <SidebarOption Icon={LibraryMusicIcon} title="Spotify For Developers" />
         </a>
        <br />
        <strong className="sidebar__title">BETTING RESOURCES</strong>
        {/* hr = horizantal row line break */}
        <hr />
        {/* {playlists?.items?.map(playlist => (
        <SidebarOption key={playlist.id} title={playlist.name} />
        ))} */}
        <a target="_blank" rel="noopener noreferrer" href="https://www.actionnetwork.com/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"Action Network"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.pff.com/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"PFF"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.covers.com/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"Covers"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.espn.com/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"ESPN"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.bettorcoverage.com/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"Bettor Coverage"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.draftkings.com/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"DraftKings"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.fanduel.com/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"FanDuel"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://pointsbet.com" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"Points Bet"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.thescore.com/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"The Score"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.sportsbook.ag/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"Sportsbook.ag"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.bovada.lv/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"Bovada"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.betmgm.com" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"Bet MGM"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.williamhill.com/us" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"William Hill"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.oddsshark.com/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"OddsShark"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.foxbet.com/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"Fox Bet"} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.barstoolsportsbook.com/" style={{ color: "inherit", textDecoration: 'inherit'}}>
        <SidebarOption title={"BarStool Sportsbook"} />
        </a>
        </div>
    )
}

export default Sidebar
