import React, { useEffect, useState} from 'react';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue }  from "./DataLayer";
import SpotifyWebApi from "spotify-web-api-js";

import "./sidebarOption.css";

const spotify = new SpotifyWebApi();


function SidebarOption({title, Icon, id}) {
  const [token, setToken] = useState(null);
  // 要確認
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    // console.log("GET TOKEN 👉", token)
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token)

      // sidebarOPtionにて、redux経由で入力（決定）されたIDを取得する
      // getPlaylistにこのIDを入れる
    }

  }, [token, dispatch]);

  // 左側のプレイリストが選択されて右を切り替えてい関数
  const showPlaylist = (id) => {
    // console.log("RRR",id)
    spotify.getPlaylist(id).then((response) => {
      // console.log("response🎵",response);
      dispatch({
         // IDをredux経由でstoreに入れる
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    });
  };

  return <div onClick={() => showPlaylist(id)} className="sidebarOption">
    {Icon && <Icon className="sidebarOption__icon"/>}
    {Icon ? <h4>{title} </h4> : <p> {title} </p>}
    
  </div>;
}

export default SidebarOption

