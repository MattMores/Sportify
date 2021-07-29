import React from 'react'
import "./Body.css"
import Header from '../Header.js/Header'

function Body( { spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify}/>
        </div>
    )
}

export default Body
