import React from 'react'
import "../searchPage/SearchResult.scss";
import { useDataLayerValue } from "../../DataLayer";
import { useHistory } from 'react-router-dom'
// import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from "spotify-web-api-js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const spotify = new SpotifyWebApi();


function SearchResult({images,name,id}) {

  const [{ search } , dispatch] = useDataLayerValue();
  const history = useHistory()

  const getPlatlistId = e => {
    e.preventDefault()
    history.push(`/Search/${id}`)
  }


  const getSearchPlaylists = e => {
    e.preventDefault() 
    spotify.getPlaylist(id).then((searchplaylist) => {
        dispatch({
          type: "SET_SEARCHPLAYLIST",
          searchplaylist: searchplaylist,
        });
    });
  };

  return (
    <div className="featuredPlaylists" onClick={getSearchPlaylists}>    
      <Link onClick={getPlatlistId}>
       {images[0] ? (
        <div className="img">
         <img  src={images[0].url} alt="" height="200" width="200"/>
         <div className="featuredPlaylists__playlists" >
          <h2>{name}</h2>
        </div>
        </div>
        ) : (
        <div className="noImg" >
          <img src="https://www.e-uchina.net/asset/front/img/no-thumbnail.jpg" alt="" height="200" width="200"/>
          <div className="featuredPlaylists__playlists" >
          <h2>{name}</h2>
        </div>
        </div>
        )}  
        </Link>
    </div>
  )
}

export default SearchResult
