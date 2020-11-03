import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import FeaturedListBody from '../recommendPage/RecommendListBody';
import Footer from '../../components/footer/Footer';


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
