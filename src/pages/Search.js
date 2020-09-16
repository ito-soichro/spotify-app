import React from 'react'
import Sidebar from "../Sidebar";
import SearchBody from '../pages/SearchBody';
import Footer from '../Footer';



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
 