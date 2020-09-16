import React, { useEffect, useState} from 'react';
import "../pages/FeaturedPlaylists.css";
import { useDataLayerValue } from "../DataLayer";
import { useHistory } from 'react-router-dom'
import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from "spotify-web-api-js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const spotify = new SpotifyWebApi();



function FeaturedPlaylists({images,name,id}) {
  const [{ featuredplaylists } , dispatch] = useDataLayerValue();
  const history = useHistory()

  const getPlatlistId = e => {
    e.preventDefault()
    history.push(`/FeaturedList/${id}`)
  }


  const getFeaturedPlaylists = e => {
    e.preventDefault()
    console.log("動作確認①")
    spotify.getPlaylist(id).then((featuredtracks) => {
      console.log("動作確認②")
      console.log("featuredtracks確認確認",featuredtracks)
        dispatch({
          type: "SET_FEATUREDTRACKS",
          featuredtracks: featuredtracks,
        });
    });
  };

  return (
    <div className="featuredPlaylists" onClick={getFeaturedPlaylists}>
      <Link onClick={getPlatlistId}  >
        <img 
        className="featuredPlaylists__list" 
         src={images[0].url} 
         alt="" 
         height="200" width="200"
         />
        
        <div className="featuredPlaylists__playlists" >
          <h2>{name}</h2>
        </div>
      </Link> 
    </div>
  )
}

export default FeaturedPlaylists
