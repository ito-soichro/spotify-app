import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import SearchBody from '../searchPage/SearchBody';
import Footer from '../../components/footer/Footer';



function Search({spotify}) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar spotify={spotify}/>
        <SearchBody spotify={spotify}/>
      </div>
      <Footer spotify={spotify}/>
    </div>
  )
}

export default Search
 