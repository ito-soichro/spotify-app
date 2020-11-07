import React from 'react'
import "../recommend/HomeBody.css"
import Header from '../../components/header/Header';
import { useDataLayerValue } from '../../DataLayer'
import FeaturedPlaylists from '../recommend/RecommendPlaylists'

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
