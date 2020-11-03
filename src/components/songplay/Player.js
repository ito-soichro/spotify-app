import React from 'react';
import "./Player.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Body from '../../pages/favorite/Body';
import Footer from '../../components/footer/Footer';


function Player({ spotify }) {
  return (
    <div className="player">
        <div className="player__body">
          <Sidebar />
          <Body spotify={spotify}/>
        </div>
        <Footer spotify={spotify}/>
    </div>
  )
}

export default Player
　