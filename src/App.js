import React, { useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue }  from "./DataLayer";

//SpotifyAPIの全てを取得
const spotify = new SpotifyWebApi();
// console.log("spotify👉",spotify);

function App() {
  const [token, setToken] = useState(null);
  // 要確認
  const [{ user }, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    // console.log("GET TOKEN 👉", token)
    const _token = hash.access_token;

    // ここわからない
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      // spotifyから自分のデータを呼び出す
      spotify.getMe().then((user) =>  {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log("playlists🎵",playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      // sidebarOPtionにて、redux経由で入力（決定）されたIDを取得する
      // getPlaylistにこのIDを入れる

      // spotify.getPlaylist("33auqWTk2pNUG8k3IVvrtk").then((response) => {
      //   // console.log("response🎵",response);
      //   dispatch({
      //     type: "SET_DISCOVER_WEEKLY",
      //     discover_weekly: response,
      //   })
      // });
    }

  }, [token, dispatch]);

  // console.log("user👨",user);
  // console.log("token👽",token);

  return (
    // BEM
    <div className="App">
    { token ? <Player spotify={spotify} /> : <Login /> }
    </div>
  );
}

export default App;
