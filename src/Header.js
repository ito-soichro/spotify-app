import React, { useEffect, useState} from 'react'
import "./Header.css"
import { getTokenFromUrl } from './spotify';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
import { useHistory } from 'react-router-dom'
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function Header() {
  const [token, setToken] = useState(null);
  // // 要確認
  const [{ user,value }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token)

      // sidebarOPtionにて、redux経由で入力（決定）されたIDを取得する
      // getPlaylistにこのIDを入れる
    }

  }, [token, dispatch]);
  const history = useHistory()
  const handleSubmit = e => {
    e.preventDefault()
    history.push(`/search`)
  }
  
  return <div className="header">
    
    <div className="header__left">
      <form className="header__from" onSubmit={ handleSubmit }>
        <input
            placeholder="Search"
            type="text"
            onChange={e => {
              e.preventDefault()
              let value =  e.target.value
                spotify.searchPlaylists(value).then((search) => {
                  console.log("確認",search)
                  dispatch({
                  type: "SET_SEARCHARTISTS",
                  search: search,
                });
                }
                );
            }} 
          />
        <button type="submit"><SearchIcon /></button>
      </form>
    </div>
   
   
    <div className="header__rigth">
      <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
      <h4>{user?.display_name}</h4>
    </div>
  </div>;
  
}

export default Header
