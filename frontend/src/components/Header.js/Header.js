import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from '../../DataLayer/DataLayer';

function Header() {
    const [ { spotifyuser}, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
            <SearchIcon />
            <input
                placeholder="Search for Artists, Songs, or Podcasts"
                type="text"
            />
            </div>
            <div className="header__right">
                <Avatar src={spotifyuser?.images[0]?.url} alt={spotifyuser?.display_name} />
                {/* <h4>Matt Mores</h4> */}
                <h4>{spotifyuser?.display_name}</h4>
            </div>

        </div>
    )
}

export default Header;
