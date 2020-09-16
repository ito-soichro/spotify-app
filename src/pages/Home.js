import React from 'react'
import Sidebar from "../Sidebar";
import HomeBody from '../pages/HomeBody';
import Footer from '../Footer';


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
