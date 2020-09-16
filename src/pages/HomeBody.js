import React from 'react'
import "../pages/HomeBody.css"
import Header from '../Header';
import { useDataLayerValue } from '../DataLayer'
import FeaturedPlaylists from '../pages/FeaturedPlaylists'

function HomeBody({spotify}) {
  const [{ featuredplaylists },dispatch] = useDataLayerValue(); 
  
  return (
    <div className="homebody" >
      <Header spotify={spotify} />
     
      <h1>おすすめ</h1>
      <div className="homebody__info" >
        {featuredplaylists.playlists.items.map((item) => (
          <FeaturedPlaylists spotify={spotify} images={item.images} name={item.name} id={item.id}/> ))} 
      </div>
    </div>
  )
}

export default HomeBody
