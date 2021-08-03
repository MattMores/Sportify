import React from 'react'
import "./Sidebar.css"
import SidebarOption from '../SidebarOption/SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../DataLayer/DataLayer';

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue()

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="" />
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>
        {/* hr = horizantal row line break */}
        <hr />
        {playlists?.items?.map(playlist => (
        <SidebarOption key={playlist.id} title={playlist.name} />
        ))}
        <SidebarOption title={"Rock"} />
        <SidebarOption title={"R&B"} />
        </div>
    )
}

export default Sidebar
