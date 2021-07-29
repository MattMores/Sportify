import React from 'react'
import "./Home.css";
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

function Home( { spotify }) {
    return (
        <div className="home">
         <div className="home__body">
            <Sidebar />
            <Body spotify={spotify}/>
         </div>
         <Footer />
        </div>
    )
}

export default Home
