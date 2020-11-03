import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import FeaturedListBody from '../searchPage/SearchPlaylist';
import Footer from '../../components/footer/Footer';

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
