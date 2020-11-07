import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import HomeBody from '../recommend/HomeBody';
import Footer from '../../components/footer/Footer';


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
