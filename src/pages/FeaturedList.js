import React from 'react'
import Sidebar from "../Sidebar";
import FeaturedListBody from '../pages/FeaturedListBody';
import Footer from '../Footer';


function FeaturedList({spotify}) {
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

export default FeaturedList
