import React from 'react'
import Sidebar from "../SideBar/Sidebar";
import FeaturedListBody from '../SearchPage/SearchPlaylist';
import Footer from '../Footer/Footer';

function SearchPlaylists({spotify}) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
          <FeaturedListBody  spotify={spotify}/>
        </div>
      <Footer spotify={spotify}/>
    </div>
  )
}

export default SearchPlaylists
