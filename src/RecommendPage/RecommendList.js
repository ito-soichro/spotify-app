import React from 'react'
import Sidebar from "../SideBar/Sidebar";
import FeaturedListBody from '../RecommendPage/RecommendListBody';
import Footer from '../Footer/Footer';


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
