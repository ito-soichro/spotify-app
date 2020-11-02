import React from 'react'
import Sidebar from "../SideBar/Sidebar";
import HomeBody from '../RecommendPage/HomeBody';
import Footer from '../Footer/Footer';


function Home({spotify}) {
  return (
    <div className="player">
      <div className="player__body" >
        <Sidebar />
        <HomeBody spotify={spotify}/>
      </div>
      <Footer spotify={spotify}/>
</div>
  )
}

export default Home
