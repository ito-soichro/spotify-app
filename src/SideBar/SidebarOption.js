import React, { useEffect, useState} from 'react';
import { getTokenFromUrl } from '../spotify';
import { useDataLayerValue }  from "../DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./sidebarOption.css";

const spotify = new SpotifyWebApi();


function SidebarOption({title, Icon, id}) {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token)
    }

  }, [token, dispatch]);

  // 左側のプレイリストが選択されて右を切り替えてい関数
  const showPlaylist = (id) => {
    spotify.getPlaylist(id).then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    });
  };

  return (
    
      <div onClick={() => showPlaylist(id)} className="sidebarOption">
        {Icon && <Icon className="sidebarOption__icon"/>}
        {Icon ? <h4 to="/home">{title} </h4> : <p> {title} </p>}
      </div>
  );
}

export default SidebarOption

