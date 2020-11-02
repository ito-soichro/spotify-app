import React from 'react'
import Sidebar from "../SideBar/Sidebar";
import SearchBody from '../SearchPage/SearchBody';
import Footer from '../Footer/Footer';



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
 